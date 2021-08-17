
module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo  sequelize se encarga de definir los atributos de la tabla 'skill' para el ORM
   * 
   * @module Skill
   * 
   * 
   */
    const Skill = sequelize.define('Skill', {
      // Los atributos del modelo son definidos a partir de aquí
      name: DataTypes.STRING
    }, {});
    Skill.associate = function (models) {
        Skill.hasMany(models.Profile)
    };
    return Skill;
  };