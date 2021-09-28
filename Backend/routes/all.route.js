// Cargamos el módulo de express para poder crear rutas
const express = require("express");
const router = express.Router();

//Referenciamos la ruta de usuario
const usersRoute = require("./user.route");
router.use("/api/auth", usersRoute);

//Referenciamos la ruta de habilidades
const skillsRoute = require("./skills.route");
router.use("/api/skills", skillsRoute);

// Exportamos la configuración
module.exports = router;