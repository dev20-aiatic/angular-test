const { User, Profile, Event} = require("../models/index.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const jwt_secret = process.env.JWT_SECRET || "development";

const UserController = {
  /**Método encargado de gestionar el registro de usuario
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function create - Función sequelize que permite crear un nuevo registro
   * @function sign - Función de dependencia jwt que genera el token de logueo
   * @function hash - Función de dependencia bcrypt que encripta el password
   * @returns - Token, registro de perfil y usuario
   */
  async register(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 9);
      /**Inicialmente guardamos el perfil*/
      const profile = await Profile.create({
        lastname: "",
        natIdCard: "",
        DoB: "",
        city: "",
        department: "",
        country: "",
        postalcode: "",
        career: "",
        description: "",
      });
      /** Creamos el nuevo usuario*/
     const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        Profile_Id: profile.id,
        password,
      });
      // Generamos el token para el usuario encontrado
      const token = jwt.sign({id:newUser.id}, jwt_secret, {
        expiresIn: "2h", // expires in 2 hours,
      });
      res.status(200).send({
        auth: true,
        user: newUser,
        token: token,
        message: "¡Gracias por su registro!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        auth: false,
        message: "Hubo un problema al tratar de crear el usuario",
      });
    }
  },

  /**Método encargado de gestionar el inicio de sesión
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findOne - Función sequelize que permite buscar registros de un modelo mediante una columna
   * @function sign - Función de dependencia jwt que genera el token de logueo
   * @function compare - Función de dependencia bcrypt que compara la clave encriptada con la clave ingresada
   * @returns - Token, información del inicio de sesión
   */
   async login(req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(401).send({
                message: 'Correo o contraseña incorrecta'
            })
        }
        
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                auth: false,
                token: null,
                message: 'Contraseña incorrecta'
            })
        }
        // Asignamos el token de inicio de sesión
        const token = jwt.sign({ id: user.id }, jwt_secret, {expiresIn: "24h"});
        res.status(200).send({
            auth:true,
            token:token,
            message: 'Bienvenido de nuevo ' + user.name
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Hubo un problema al iniciar sesión'
        });
    }
},
  
  /**Método encargado de mostrar el perfil de usuario
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findOne - Función sequelize que permite buscar registros de un modelo mediante una columna
   * @returns - Información del usuario incluyendo el perfil asociado a este
   */
  async user_profile(req, res) {
    try {
      User.findOne({
        where: { id: req.user_Id 
        },
        attributes: ["id", "name", "email", "social"],
        include: [Profile],
      }).then(user => {
        res.status(200).send({
          user: user,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un problema al obtener los datos",
        error: error,
      });
    }
  },

   /**Método encargado de gestionar la modificación del perfil de usuario
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findOne - Función sequelize que permite buscar registros de un modelo mediante una columna
   * @function update - Función sequelize que permite actualizar registros de un modelo
   * @function create - Función sequelize que permite crear un nuevo registro
   * @returns - Información del usuario incluyendo el perfil asociado a este
   */

 async updateProfile(req, res) {
   try {
    const finduser = await User.findOne({
      where: { id: req.user_Id 
      },
      attributes: ["id", "name", "email", "social", "Profile_Id"],
    });
    
    await User.update({...req.body}, {
      where: {id: req.user_Id },
    });

    await Profile.update({...req.body}, {
      where: { id: finduser.Profile_Id 
      },
    });

      Event.create({
      username: finduser.name,
      description: "Modificó su perfil"
   }); 
   
    res.status(200).send({
        message: "Datos actualizados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Hubo un problema al actualizar  los datos",
      error: error,
    });
  }
},

  /**Método encargado de gestionar el inicio de sesión con Google
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findOne - Función sequelize que permite buscar registros de un modelo mediante una columna
   * @function create - Función sequelize que permite crear un nuevo registro
   * @function sign - Función de dependencia jwt que genera el token de logueo
   * @returns - Token, información del inicio de sesión
   */
  async googleIn(req, res) {
    //Buscamos si se encuentra previamente registrado
    try {
      const findUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!findUser) {
        /** Procedemos a crear el perfil */
        const profile = await Profile.create({
        lastname: "",
        natIdCard: "",
        DoB: "",
        city: "",
        department: "",
        country: "",
        postalcode: "",
        career: "",
        description: "",
        });

        /** Creamos el nuevo usuario*/
        const newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          Profile_Id: profile.id,
          password: ":P",
          social: "google",
        });

        /** Actualizamos el perfil con la información de google*/
        
        await Profile.update({
          lastname: req.body.lastname,
          photo: req.body.photo,
        }, {
          where: { id: newUser.Profile_Id},
        });

      }
       // Asignamos el token de inicio de sesión
      const token = jwt.sign({ id: newUser.id }, jwt_secret, {expiresIn: "24h"});
      res.status(200).send({
        auth: true,
        user: newUser,
        token: token,
        message: "Bienvenido " + user.name,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        auth: false,
        message: "Upps! no fue posible el logueo con Google",
      });
    }
  },

  /**Método encargado de traer todos los usuarios registrados
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findAll - Función sequelize que permite buscar todos los registros de un modelo mediante una columna
   * @returns - Listado de usuarios registrados
   */

  async getUsers(res) {
    try {
      const users = User.findAll({
        include: [
          {
            require: true,
            model: Profile,
          },
        ],
      });
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un problema al encontrar los usuarios",
      });
    }
  },

  /**Método encargado de renovar el token del usuario
   * @param req - Argumento de solicitud HTTP 
   * @param res - Argumento de respuesta HTTP
   * @function findOne - Función sequelize que permite buscar registros de un modelo mediante una columna
   * @function sign - Función de dependencia jwt que genera el token de logueo
   * @returns - Token de logueo renovado
   */
  async renewToken(req, res) {
    //Del middleware 'jwt' se obtiene el id de usuario en el payload del token JWT con req.userId
    //el cual puede utilizarse para buscarlo en la tabla 'users'
    try {
      const findUser = await User.findOne({
        where: {id: req.user_Id},
      });
      //Al obtener el usuario se procede a generar de nuevo un token para el usuario
      const token = jwt.sign({ id: findUser.id }, jwt_secret, {expiresIn: "24h"});
      //Respuesta exitosa del proceso
      return res.status(200).send({
        auth: true,
        user: findUser,
        token: token,
        message: "Se ha renovado el token de la sesión",
      });
    } catch (error) {
      return res.status(500).send({
        auth: false,
        message: "No se renovó el token del usuario",
      });
    }
  },
};
module.exports = UserController;
