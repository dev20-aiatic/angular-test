const router = require('express').Router();
const { renewToken } = require('../controllers/userController');
const UserController = require('../controllers/userController');
const {jwt_validation} = require('../middleware/jwt_validation.js')
const {Validations} = require('../middleware/Validations.js')

router.post('/register',[Validations.checkDuplicateEmail, Validations.checkBlankInputs],UserController.register);
router.post('/login',[Validations.checkBlankInputs],UserController.login);
router.get('/renew-token',jwt_validation, UserController.renewToken);
router.get('/users', UserController.getUsers);
router.post('/google', UserController.googleIn);
router.put('/user/update',jwt_validation, UserController.updateProfile);
router.get('/user/info',jwt_validation, UserController.user_profile);
router.get('/user/profile/:id', UserController.getByPK);


module.exports = router