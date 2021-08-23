const express = require('express');
const logger = require("morgan");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router index
const indexRouter = require("./routes/allRoutes");
app.use("/", indexRouter);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/* // Prueba de petición GET
app.get("/", (req, res) => {
    res.status(200).send("   Prueba de petición GET realizada correctamente  ");
}); */

// Serve static files
app.use(express.static(__dirname + '/dist/Dashgular'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Dashgular/index.html'));
  });

/* const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Se está ejecutando server en puerto ${PORT} `);
});
 */

// default Heroku port
app.listen(process.env.PORT || 5000);