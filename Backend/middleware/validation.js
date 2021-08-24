const jwt = require('jsonwebtoken');
const { User, Token } = require('../models/indexModel');
const env = process.env.NODE_ENV || 'development';
const {jwt_secret} = require('../config/config.json')[env];



        /**
         * Función para validar el token con su respectivo usuario 
         * @param {any} token - Token que será validado con el token alojado en el header
         * @param {any} jwt_secret - Palabra secreta usada para la generación del token
         * @param {any} user - usuario extraido de la base de datos
         */


const validation = async (req, res, next) => {
    try {
        const token = req.headers['Authorization']; //sacamos el token de los headers
        const payload = jwt.verify(token, jwt_secret); //sacamos el payload del token
        const user = await User.findByPk(payload.id); //buscamos el usuario en la base de datos con el id del payload
        const tokenFound = await Token.findOne({
            where:{
                token:token
            }
        })
        if(!user || !tokenFound){
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
        req.user = user; // ponemos el usuario en el objeto request
        next(); //pasamos a la función controladora o al  middleware
    } catch (error) {
        res.status(401).send({
            message: 'No estas autorizado',
            error
        })
    }
}

module.exports = {validation};