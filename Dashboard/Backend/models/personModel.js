module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birthdate: DataTypes.STRING,
      city: DataTypes.STRING,
      deparment:DataTypes.STRING,
      country: DataTypes.STRING,
      postalcode: DataTypes.STRING,
      career: DataTypes.STRING,
      Skill_Id: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {});
    Person.associate = function (models) {
    Person.belongsTo(models.Skill);
    };
    return Person;
  };