const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post('/register',
  [
    body('name').trim().not().isEmpty(),
    body('email').isEmail()
      .withMessage('Por favor ingrese un correo valido.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('¡El correo ya existe en nuestra BD!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.register
);

router.post('/login', authController.login);


module.exports = router;