"use strict";

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo se encarga de definir los atributos de la tabla 'profiles'
   *
   * @module Person
   *
   *
   */
  const Profile = sequelize.define('Profile', {
      // Los atributos del modelo son definidos a partir de aquí
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      lastname: DataTypes.STRING,
      natIdCard: DataTypes.BIGINT,
      DoB: DataTypes.DATE,
      city: DataTypes.STRING,
      department: DataTypes.STRING,
      country: DataTypes.STRING,
      postalcode: DataTypes.STRING,
      career: DataTypes.STRING,
      photo: DataTypes.STRING,
      description: DataTypes.TEXT,
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
  // Se define la relacion de llaves presente entre las tablas 'skills' y 'person'
  Profile.associate = function (models) {
    Profile.hasOne(models.User, {foreignKey:"Profile_Id"});
    Profile.belongsToMany(models.Skill, {through:models.ProfileSkill, foreignKey:"Profile_Id", otherKey:"Skill_Id"});
  };
  return Profile;
};
