const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {validation} = require('../middleware/validation.js')
router.post('/auth/register',UserController.register);
router.post('/auth/login',UserController.login);
router.get('/user/profile/:UserId', UserController.getProfile);
router.get('/user/info', validation, UserController.getInfo);

module.exports = router