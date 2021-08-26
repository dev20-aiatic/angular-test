const router = require('express').Router();
const UserController = require('../controllers/userController');
const {validation} = require('../middleware/validation.js')
irouter.post('/auth/login',UserController.login);
router.post('/user/update:id', UserController.updateProfile);
router.get('/user/info', validation, UserController.getInfo);

module.exports = router