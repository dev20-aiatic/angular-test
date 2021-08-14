module.exports = (sequelize, DataTypes) => {
    /**
   * Este modelo sequelize se encarga de definir los atributos de la tabla 'user' para el ORM
   * 
   * @module User
   * 
   * 
   */
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        //Deshabilitamos los timestamps para evitar los campos createdAt y updateAt
        timestamps: false
    });
    User.associate = function(models) {

    };
    return User;
};