module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
      name: DataTypes.STRING
    }, {});
    Skill.associate = function (models) {
        Skill.hasMany(models.Person)
    };
    return Skill;
  };