const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {validation} = require('../middleware/validation.js')
router.post('/auth/register',UserController.register);
router.post('/auth/login',UserController.login);
router.get('/user/profile', UserController.getProfile);
router.get('/user/info', UserController.getInfo);
router.get('/',UserController.getAll);

module.exports = router