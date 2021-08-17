module.exports = (sequelize, DataTypes) => {
    /**
   * Este modelo sequelize se encarga de definir los atributos de la tabla 'user' para el ORM
   * 
   * @module User
   * 
   * 
   */
    const User = sequelize.define('User', {
        userId: {
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.NUMBER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
          },
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        profileId: {
            require:true,
            type: DataTypes.NUMBER
        },
    }, {
        //Deshabilitamos los timestamps para evitar los campos createdAt y updateAt
        timestamps: false
    });

    User.associate = function(models) {
    User.hasMany(models.Profile);

    };
    return User;
};