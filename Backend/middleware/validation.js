const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const jwt_secret = process.env.JWT_SECRET || "development";



        /**
         * Función para validar el token con su respectivo usuario 
         * @param {any} token - Token que será validado con el token alojado en el header
         * @param {any} jwt_secret - Palabra secreta usada para la generación del token
         * @param {any} user - usuario extraido de la base de datos
         */


const validation =  (req, res, next) => {
  const token = req.headers["x-access-token"];
        if(!token){
          res.status(401).send({
              auth: false,
              message: 'No existe token',
              error
          })
      }
      try {
        const payload = jwt.verify(token, jwt_secret);
        req.userId = payload.id
    } catch (error) {
        return res.status(500).json({
            auth: false,
            message: 'Hubo un error',
            error
        })
    }
    next();
}

module.exports = {validation};