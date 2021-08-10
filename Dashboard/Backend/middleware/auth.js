const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('¡No se encuentra logueado!');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'Aquenoadivinaswey');
  } catch (err) {
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('¡No se encuentra logueado!');
    error.statusCode = 401;
    throw error;
  } 
  if(decodedToken.exp > Date.now()){
    const error = new Error('¡Su token ya no es valido!');
    error.statusCode = 500;
    throw error;
  }

  req.isLoggedIn = true;
  req.userId = decodedToken.userId;
  req.email = decodedToken.email;
  next();
};