module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo  sequelize se encarga de definir los atributos de la tabla 'person' para el ORM
   * 
   * @module Person
   * 
   * 
   */
  const Profile = sequelize.define("Profile", {
      // Los atributos del modelo son definidos a partir de aquí
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
   Profile.associate = function (models) {
    Profile.belongsTo(models.Skill);
  };
  return Profile;
};