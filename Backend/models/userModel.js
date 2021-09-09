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
        user_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        profile_Id: DataTypes.INTEGER,
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
    User.belongsTo(models.Profile, {foreignKey: 'profile_Id', onDelete: 'CASCADE'});
  };
    return User;
};