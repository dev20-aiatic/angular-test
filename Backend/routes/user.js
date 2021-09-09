const router = require('express').Router();
const { renewToken } = require('../controllers/userController');
const UserController = require('../controllers/userController');
const {validation} = require('../middleware/validation.js')
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/renew-token',validation, UserController.renewToken);
router.get('/users', UserController.getUsers);
router.post('/google', UserController.googleIn);
router.put('/user/update/:id', UserController.updateProfile);
router.get('/user/info',validation, UserController.getInfo);
router.get('/user/profile/:id', validation, UserController.getByPK);


module.exports = router