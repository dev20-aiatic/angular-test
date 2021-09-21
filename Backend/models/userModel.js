"use strict";

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo sequelize se encarga de definir los atributos de la tabla 'user' para el ORM
   *
   * @module User
   *
   *
   */
  const User = sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      social: DataTypes.STRING,
      Profile_Id: {
        type: DataTypes.UUID,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {}
  );

  User.associate = function (models) {
    User.belongsTo(models.Profile, {foreignKey:"Profile_Id"});
  };
  return User;
};
