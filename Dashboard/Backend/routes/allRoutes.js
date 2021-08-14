const express = require("express");
const router = express.Router();

//Referenciamos la ruta de usuario
const usersRoute = require("./user");
router.use("/api", usersRoute);


//Referenciamos la ruta de persona
const personRoute = require("./person");
router.use("/api/person", personRoute);


//Referenciamos la ruta de habilidades
const skillsRoute = require("./skills");
router.use("/api/skills", skillsRoute);



module.exports = router;