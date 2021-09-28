// Cargamos el módulo de express para poder crear rutas
const router = require('express').Router();
// Cargamos el Controlador Usuario
const UserController = require('../controllers/user.controller');
// Cargamos el middleware del token JWT
const {jwt_validation} = require('../middlewares/jwt.middleware')
// Cargamos el middleware para validaciones
const {Validations} = require('../middlewares/validations.middleware')

// Creamos las rutas correspondientes de tipo GET, POST, PUT requeridas por el controlador
router.post('/register',[Validations.checkDuplicateEmail, Validations.checkBlankInputs],UserController.register);
router.post('/login',[Validations.checkBlankInputs],UserController.login);
router.get('/renew-token',jwt_validation, UserController.renewToken);
router.get('/users', UserController.getUsers);
router.post('/google', UserController.googleIn);
router.put('/user/update',jwt_validation, UserController.updateProfile);
router.get('/user/info',jwt_validation, UserController.user_profile);

// Exportamos la configuración
module.exports = router