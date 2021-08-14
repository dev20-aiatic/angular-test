const { User, Token } = require('../models/indexModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];

const UserController = {
    getAll(res) {
        User.findAll({
        })
            .then(users => res.send(users))
    },

     /**Función encargada de gestionar el registro de usuario
      * @param {string} name - Nombre completo del usurio
      * @param {string} email - Correo del usuario
      * @param {string} password - Contraseña del usuario
    */
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const email = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            console.log(email);
            if (email) {
                return res.status(400).send({
                    message: 'La dirección de correo ya se encuentra registrada'
                })
            }
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                createdAt : null,
                password,
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
            })
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