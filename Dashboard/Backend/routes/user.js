const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {validation} = require('../middleware/validation.js')
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/info',validation, UserController.getInfo);
router.get('/',UserController.getAll);

module.exports = router