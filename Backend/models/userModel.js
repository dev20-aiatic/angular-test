'use strict';


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
        googleauth: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
    }, {
    });

    User.associate = function(models) {
    User.belongsToMany(models.Profile, {through: 'user_profile', foreignKey: 'profile_Id', otherKey: 'user_Id'});
  };
    return User;
};