const express = require("express");
const router = express.Router();


const usersRoute = require("./user");
router.use("/api/auth", usersRoute);


module.exports = router;