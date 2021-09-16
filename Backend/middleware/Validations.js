const {User} = require("../models/indexModel");
const { validationResult} = require('express-validator');

        /**
         * Función para validar los datos ingresados en el registro de usuario 
         * @param {string} email - email que sera validado con los registrados en el db
         */

const Validations = {

    checkDuplicateEmail:(req, res, next) => {
        User.findOne({
            where: {
                email: req.body.email
            } 
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "El correo ingresado ya se encuentra en la BD!",
                  });
                return;
            }
            next();
        });
    },
    checkBlankInputs: (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(500).json({
                auth: false,
                errors: errors.mapped()
            })
        }

        next();
    }
};    

module.exports = {Validations};