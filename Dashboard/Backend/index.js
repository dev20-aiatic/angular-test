const express = require('express');

const authRoutes = require('./routes/auth')

const errorController = require('./controllers/error');

const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


// Rutas middlewares
app.use('/auth', authRoutes);

// Definición de errores 
app.use(errorController.get404);

app.use(errorController.get500);


// Ejecutar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto: ${PORT}`)
})