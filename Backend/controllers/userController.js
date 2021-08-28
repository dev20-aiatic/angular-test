const { User, Profile, Token } = require('../models/indexModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];
const { profile } = require('console');


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
                include:[{model:Profile,}],
                where: {
                    email: req.body.email
                }, 
            })
            if (findUser) {
                return res.status(400).send({
                    message: 'La dirección de correo ya está en uso'
                })
            }
            
             /**
            * Inicialmente guardamos el perfil 
            * @class
            */
           const profile = await Profile.create();
/**
            /**
             * Posteriormente asigmanos el perfil al nuevo usuario
             * @class
             */


            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password,
            });

            /*
            * Asignamos el perfil previamente creado al nuevo usuario  
            */
           await profile.setUser(newUser);

            // Generamos el token para el usuario encontrado
             const token = jwt.sign({
                id:newUser.user_Id,
                name:newUser.name,
            }, jwt_secret,
            {
                expiresIn:'2h'
            }
            );

            res.status(200).send({
                auth:true,
                user: newUser,
                token:token,
                message:'¡Gracias por su registro!'
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                auth:false,
                message: 'Hubo un problema al tratar de crear el usuario'
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
            const user = await User.findOne({
                include: [{
                    require:true,
                    model:Profile}],
                where: {
                    email: req.body.email
                }
            });
            console.log(user);
            if (!user) {
                return res.status(401).send({
                    auth: false,
                    token: null,
                    message: 'Correo o contraseña incorrectas'
                })
            }
            
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Contraseña incorrecta'
                })
            }
            // Asignamos el token de inicio de sesión
            const token = jwt.sign({
                id:user.user_Id,
                name:user.name,
            }, jwt_secret,
            {
                expiresIn:'2h'
            }
            );
            //status es 200 by default
            res.status(200).send({
                auth:true,
                token:token,
                user,
                message: 'Bienvenido de nuevo ' + user.name
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al iniciar sesión'
            });
        }
    },
    async updateProfile(req, res) {
        const {id} = req.params;
        const {lastname, natIdCard, DoB, city, department, country, postalcode,
            career, skill_Id, description } = req.body;
        try {
            
            /**
             * Buscamos el perfil del usuario mediante EagerLoading
             * @class
             */
                //Obtenemos profile Id de user
                        //Método actualizar

            const profile = await Profile.findOne({
                include:[{
                    model:User,
                }],
                where: {profile_Id: id}
            });

            profile.update(req.body)

            return res.status(200).send({
                auth: true,
                user: profile,
                message: 'Cambios efectuados correctamente'
            });
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
                auth: false,
                message: 'Algo salió mal'
            });
        }
    },
    async getInfo(req,res){
        const {user} = req;
        try{
        const findUser = await User.findOne({where:{user_Id:user}});
        if (!findUser) {
            return res.status(404).send({
                message: 'No hay usuario'
            })
        }
        res.status(200).send(findUser);

       }catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Hubo un problema al encontrar el usuario'
        });
    }
},

    getByPK(req, res) {
    const {user} = req;
    User.findOne({
            include: [{
                require:true,
                model:Profile}],
            where: {
                user_Id:user
            }
        })
        .then(user => res.send(user))
},
      
}
module.exports = UserController;