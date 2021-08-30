"use strict";

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo  sequelize se encarga de definir los atributos de la tabla 'person' para el ORM
   *
   * @module Person
   *
   *
   */
  const Profile = sequelize.define(
    "Profile",
    {
      // Los atributos del modelo son definidos a partir de aquí
      profile_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastname: DataTypes.STRING,
      natIdCard: DataTypes.BIGINT,
      DoB: DataTypes.DATE,
      city: DataTypes.STRING,
      deparment: DataTypes.STRING,
      country: DataTypes.STRING,
      postalcode: DataTypes.STRING,
      career: DataTypes.STRING,
      skill_Id: DataTypes.INTEGER,
      photo:DataTypes.STRING,
      description: DataTypes.TEXT,
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {}
  );
  // Se define la relacion de llaves presente entre las tablas 'skills' y 'person'
  Profile.associate = function (models) {
    Profile.hasOne(models.User, {
      foreignKey: {
        name: "profile_Id",
        allowNull: false,
      },
    });
    Profile.belongsTo(models.Skill, { foreignKey: "skill_Id" });
  };
  return Profile;
};
