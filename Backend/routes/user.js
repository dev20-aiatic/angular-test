const router = require('express').Router();
const UserController = require('../controllers/userController');
const {validation} = require('../middleware/validation.js')
router.post('/auth/register',UserController.register);
router.post('/auth/login',UserController.login);
router.put('/user/update/:id', UserController.updateProfile);
router.get('/user/info', validation, UserController.getInfo);
router.get('/user/profile/:id', validation, UserController.getByPK);

module.exports = router