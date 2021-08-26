
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

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
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Prueba de petición GET
app.get("/", (req, res) => {
    res.status(200).send("   Prueba de petición GET realizada correctamente  ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Se está ejecutando server en puerto ${PORT} `);
});
