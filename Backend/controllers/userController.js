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
            const localUser = await User.findOne({
                where: {
                    email: req.body.email
                }, 
            })
            console.log(localUser);
            if (localUser) {
                return res.status(400).send({
                    message: 'La dirección de correo ya ha sido usada'
                })
            }
/**
            /**
             * Registrar un nuevo usuario
             * @class
             */
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                createdAt : null,
                password,
            });
             /**
            * Asignamos un perfil correspondiente al usuario
            * @class
            */

           const profile = await Profile.create({
               user_Id	: user.id
           });
          
            res.status(201).send({
                user,
                message: 'Usuario creado con éxito'
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear el usuario'
            });
        }
    },

    async getProfile(req, res) {
        const {id} = req.params;

        try {
            const user = await User.findOne({id});
            console.log(user);
/**
            /**
             * Obtenemos perfil enlazado con usuario
             * @class
             */
            const user_Id = user.id
            const profile = await Profile.findOne({
                where:{
                    user_Id},
                });
            res.status(201).send({
                profile,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de consultar el usuario'
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
                where: {
                    email: req.body.email
                }
            });
            console.log(user);
            if (!user) {
                return res.status(400).send({
                    message: 'Correo o contraseña incorrectas'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Contraseña incorrecta'
                })
            }
            const token = jwt.sign({
                id: user.id
            }, jwt_secret);
            Token.create({
                token,
                UserId: user.id
            });
            //status es 200 by default
            res.send({
                message: 'Bienvenid@ ' + user.name,
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al iniciar sesión'
            });
        }
    },
    getInfo(req,res){
        res.send(req.user);
    }
    
}
module.exports = UserController;