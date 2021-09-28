const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config()

// Inicializamos la aplicación express
const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Incluimos la rutas
const indexRouter = require("./routes/all.route");

app.options('/*',(req, res, next) => res.send());


app.use(express.static(__dirname + '/dist'));
app.use("/", indexRouter);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Prueba de petición GET
app.get("/", (req, res) => {
    res.status(200).send("   Prueba de petición GET realizada correctamente  ");
});

/**Definimos puerto del servidor */
app.set('PORT', process.env.PORT || 8080);

/**Asignamos el puerto de tal manera que sea utilizable por el deploy de heroku */
app.listen(app.get('PORT'), () => {
    console.log(`Se está ejecutando server en puerto ${app.get('PORT')} `);
});
