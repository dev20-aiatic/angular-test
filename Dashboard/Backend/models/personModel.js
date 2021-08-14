module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo  sequelize se encarga de definir los atributos de la tabla 'person' para el ORM
   * 
   * @module Person
   * 
   * 
   */
  const Person = sequelize.define("Person", {
      // Los atributos del modelo son definidos a partir de aquí
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      natIdCard: DataTypes.BIGINT,
      birthdate: DataTypes.DATE,
      city: DataTypes.STRING,
      deparment: DataTypes.STRING,
      country: DataTypes.STRING,
      postalcode: DataTypes.STRING,
      career: DataTypes.STRING,
      Skill_Id: DataTypes.STRING,
      description: DataTypes.TEXT,
    }, {}
  );
   // Se define la relacion de llaves presente entre las tablas 'skills' y 'person'
  Person.associate = function (models) {
    Person.belongsTo(models.Skill);
  };
  return Person;
};