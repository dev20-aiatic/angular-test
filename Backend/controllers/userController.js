const { User, Profile, Token } = require('../models/indexModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];


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
            * Creamos un perfil vacio que será asignado posteriormente al usuario
            * @class
            */
           const profile = await Profile.create();

            /**
             * Registramos el nuevo usuario
             * @class
             */
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password,
            });

            /*
            * Asignamos el perfil previamente creado al nuevo usuario  
            */
            await profile.setUser(user);

             // Asignamos el token registro de usuario
             const token = jwt.sign({
                id:user.user_Id,
                name:user.name,
                email:user.email
            }, jwt_secret,
            {
                expiresIn:'2h'
            }
            );

            res.status(200).send({
                auth:true,
                token:token,
                message:'¡Gracias por su registro!'
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
                email:user.email
            }, jwt_secret,
            {
                expiresIn:'2h'
            }
            );
            //status es 200 by default
            res.status(200).send({
                auth:true,
                token:token,
                message: 'Bienvenido de nuevo' + user.name
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
            const findUser = await User.findOne({
                include:[{
                    require:true,
                    model:Profile,
                }],
                where: {
                    user_Id: id
                }
            });
            console.log(findUser);

            const profileId = findUser.profile_Id;
                        //Método actualizar
           Profile.update({
                    ...req.body
                },{
                    where: {
                    profile_Id: profileId
                }
            })
            .then(profile => res.send({
                profile,
                message: 'Registro modificado exitosamente'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para modificar el registro'
            }))
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
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
}
      
}
module.exports = UserController;