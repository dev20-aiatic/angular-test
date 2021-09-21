'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfileSkill = sequelize.define('ProfileSkill', {
    Profile_Id: DataTypes.INTEGER,
    Skill_Id: DataTypes.INTEGER,
  }, {});
  ProfileSkill.associate = function(models) {
    
  };
  return ProfileSkill;
};