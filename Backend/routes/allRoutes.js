const express = require("express");
const router = express.Router();

//Referenciamos la ruta de usuario
const usersRoute = require("./user");
router.use("/api", usersRoute);


//Referenciamos la ruta de persona
const profileRoute = require("./profile");
router.use("/api/profile", profileRoute);


//Referenciamos la ruta de habilidades
const skillsRoute = require("./skills");
router.use("/api/skills", skillsRoute);



module.exports = router;