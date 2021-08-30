const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config()

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router index
const indexRouter = require("./routes/allRoutes");

app.options('/*',(req, res, next) => res.send());


app.use(express.static(__dirname + '/dist'));
app.use("/", indexRouter);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Prueba de petición GET
app.get("/", (req, res) => {
    res.status(200).send("   Prueba de petición GET realizada correctamente  ");
});

//Asignamos el puerto de tal manera que sea utilizable por el deploy de heroku
app.listen(process.env.PORT || 3000, function() {
    console.log(`Se está ejecutando server en puerto ${PORT} `);
});
