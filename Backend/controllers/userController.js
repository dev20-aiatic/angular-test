const {
  User,
  Profile
} = require("../models/indexModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const jwt_secret = process.env.JWT_SECRET || "development";

const UserController = {
  /**Función encargada de gestionar el registro de usuario
   * @param {string} name - Nombre completo del usurio
   * @param {string} email - Correo del usuario
   * @param {string} password - Contraseña del usuario
   */
   async register(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 9);
      const findUser = await User.findOne({
        include: [{ model: Profile }],
        where: {
          email: req.body.email,
        },
      });
      if (findUser) {
        return res.status(400).send({
          message: "La dirección de correo ya está en uso",
        });
      }
      /**Inicialmente guardamos el perfil*/
      const profile = await Profile.create();
      /** Creamos el nuevo usuario*/
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password,
      });

      /** Asignamos el perfil previamente creado al nuevo usuario*/
      await profile.setUser(newUser);

      // Generamos el token para el usuario encontrado
      const token = jwt.sign(
        {
          id: newUser.user_Id,
          name: newUser.name,
        },
        jwt_secret,
        {
          expiresIn: "2h",
        }
      );

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

  /**Función encargada de gestionar el inicio de sesión
   * @param {string} email - Correo del usuario
   * @param {string} password - Contraseña del usuario
   * @param {string} user.id - Identificador del usuario en la base de datos
   */

  async login(req, res) {
    try {
      const findUser = await User.findOne({
        include: [{
          require: true,
          model: Profile,
        }, ],
        where: {
          email: req.body.email,
        },
      });
      if (!findUser) {
        return res.status(401).send({
          auth: false,
          token: null,
          message: "Correo o contraseña incorrectas",
        });
      }

      const isMatch = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      if (!isMatch) {
        return res.status(400).send({
          message: "Contraseña incorrecta",
        });
      }
      // Asignamos el token de inicio de sesión
      const token = jwt.sign({
          id: findUser.user_Id,
          name: findUser.name,
        },
        jwt_secret, {
          expiresIn: "2h",
        }
      );
      //status es 200 by default
      res.status(200).send({
        auth: true,
        user: findUser,
        token: token,
        message: "Bienvenido " + findUser.name,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un problema al iniciar sesión",
      });
    }
  },
  /**Función encargada de gestionar la modificación del perfil de usuario
   * @param {integer} id - Número de registro del usuario
   * @param {string} lastname - Contraseña del usuario
   * @param {integer} natIdCard - Número de cedula del usuario
   * @param {date} DoB - Fecha de nacimiento del usuario
   * @param {string} city - Ciudad de residencia del usuario
   * @param {string} department - Departamento de residencia del usuario
   * @param {string} country - País de recidensia del usuario
   * @param {integer} postalcode - Código postal del usuario
   * @param {string} career - Profesión del usuario
   * @param {integer} skill_Id - Identificador de habilidades asignables al usuario
   * @param {string} description - Descripción del usuario
   */

  async updateProfile(req, res) {
    const {id} = req.params;
    const {lastname,natIdCard, DoB,city, department,country, postalcode, career, skill_Id, description} = req.body;
    try {
      /** Buscamos el perfil del usuario mediante EagerLoading */
      const profileFind = await Profile.findOne({
        include: [{
          model: User,
        }, ],
        where: {
          profile_Id: id
        },
      });
      if (!profileFind){
        return res.status(404).json({
          message: 'No existe perfil con el id ' + id
        });
      }

      /** De encontrarse procedemos a actualizar el usuario */

      await Profile.update({
        ...req.body
      },{
        where:{
          profile_Id:id
        }
      });

      return res.status(200).send({
        auth: true,
        user: profileFind,
        message: "Cambios efectuados correctamente",
      });

    } catch (error) {
      console.log(error);
      res.status(500).send({
        auth: false,
        message: "Algo salió mal",
      });
    }
  },

  async googleIn(req, res) {
      //Buscamos si se encuentra previamente registrado
    try{
      const findUser = await User.findOne({
        where: {
          email: req.body.email
        },
      });
      if (!findUser) {
      /** Procedemos a crear el perfil */
      const userProfile = await Profile.create();
      /**Asigmanos el perfil al nuevo usuario*/
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: ':P',
        googleauth: true,
        profile:userProfile,
      });
      /** Asignamos el perfil previamente creado al nuevo usuario*/
      await userProfile.setUser(newUser);

      const fillprofile = await Profile.update({
        lastname: req.body.lastname,
        photo: req.body.photo,
      },{
        where: {
          profile_Id: newUser.id
        },
      }
      )

    }
      // Generamos el token para el usuario encontrado
      const token = jwt.sign({
          id: newUser.id,
          name: newUser.name,
        },
        jwt_secret, {
          expiresIn: "2h",
        }
      );
      res.status(200).send({
        auth: true,
        user: findUser,
        token: token,
        message: "Bienvenido " + findUser.name,
      })

    } catch (error){
      console.log(error);
      res.status(500).send({
        auth: false,
        message: "Upps! no fue posible el logueo con Google",
      })
  }
},




  async getInfo(req, res) {
    const {userId} = req;
    try {
      const findUser = await User.findOne({
        where: {
          user_Id: userId
        }
      });
      if (!findUser) {
        return res.status(404).send({
          message: "No hay usuario",
        });
      }
      res.status(200).send(findUser);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un problema al encontrar el usuario",
      });
    }
  },

  async getByPK(req, res) {
    const { user } = req;
    User.findOne({
      include: [{
        require: true,
        model: Profile,
      }, ],
      where: {
        user_Id: user,
      },
    }).then((user) => res.send(user));
  },

  /**
   * Función que se encarga de listar todos los usuarios de la BD
   * @param {any} req
   * @param {any} res
   * @returns {any}
   */

   async getUsers(res) {
    try {
      const users = User.findAll({
      include: [{
        require: true,
        model: Profile,
      }, ],
    });
    res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Hubo un problema al encontrar los usuarios",
      });
    }
  },

  /**
   * función encargada de renovar el token del usuario
   * @param {any} req  -- Parametro que se usa para llamar a la respuesta userId del middleware 'Validation'
   * @param {any} res  -- Respuesta obtenida de la promesa
   * @returns {any}  -- Respuesta exitosa con status 200 o status 500 al encontrarse error 
   */
  async renewToken(req, res) {
    //Del middleware 'validation' se obtiene el id de usuario en el payload del token JWT con req.userId 
    //el cual puede utilizarse para buscarlo en la tabla 'users'
    const {userId} = req;
    try {
      const findUser = await User.findOne({
        where: {
          user_Id: userId
        }
      });
      //Al obtener el usuario se procede a generar de nuevo un token para el usuario
      const token = jwt.sign({
        id: findUser.user_Id,
        name: findUser.name,
      }, jwt_secret, {
        expiresIn: '2h'
      });

      //Respuesta exitosa del proceso
      return res.status(200).send({
        auth: true,
        user: findUser,
        token: token,
        message: "Se ha renovado el token de la sesión"
      });
    } catch (error) {
      return res.status(500).send({
        auth: false,
        message: 'No se renovó el token del usuario'
      });
    }
  },

};
module.exports = UserController;
