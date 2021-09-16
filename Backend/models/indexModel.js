'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

//Declaramos la variable entorno del backend
const env = process.env.NODE_ENV || 'development';
//Enrutamos el config.json para obtener credenciales de DB MYSQL
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

//Declaramos la BD como un objeto que recibira los peticiones del sequelize
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/* Función para cargar los modelos en una nueva base de datos */
//sequelize.sync()

/**
 * Declaramos este método para retornar los nombres y objetos de los archivos en el directorio
 * @param {any} __dirname - nombre del directorio
 * @returns {any}
 */

fs.readdirSync(__dirname)
    //Esta llamada se encarga de filtrar los archivos con extensión .js existentes en el directorio
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    //Iteración que recorre cada modelo e importa a la base de datos.
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });
    //Iteración que recorre cada modelo sequelize e invoca su función asociada
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;