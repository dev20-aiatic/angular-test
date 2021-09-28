'use strict';

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo  se encarga de definir los atributos de la tabla 'skills'
   * 
   * @module Skill
   * 
   * 
   */
    const Skill = sequelize.define('Skill', {
      // Los atributos del modelo son definidos a partir de aquí
      skill_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
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
    Skill.associate = function (models) {
      Skill.belongsToMany(models.Profile, {through: models.ProfileSkill, foreignKey:"Skill_Id", otherKey:"Profile_Id"});
    };
    return Skill;
  };