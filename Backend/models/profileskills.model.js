'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfileSkill = sequelize.define('ProfileSkill', {
    Profile_Id: DataTypes.INTEGER,
    Skill_Id: DataTypes.INTEGER,
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
  ProfileSkill.associate = function(models) {
    
  };
  return ProfileSkill;
};