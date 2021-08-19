
const user = require("./userModel");


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
        allowNull: true,
        type: DataTypes.STRING,
      },
      natIdCard: DataTypes.BIGINT,
      birthdate: DataTypes.DATE,
      city: DataTypes.STRING,
      department: DataTypes.STRING,
      country: DataTypes.STRING,
      postalcode: DataTypes.STRING,
      career: DataTypes.STRING,
      skill_Id: DataTypes.STRING,
      description: DataTypes.TEXT,
      user_Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User', // Hacemos referencia a la tabla users definida en el modelo Usre
          key: 'id', // 'id' hacemos refeencia a la clave primaria de la tabla users
        },
      },
    }, {        
      timestamps: false
    });
   // Se define la relacion de llaves presente entre las tablas 'skills' y 'person'
   Profile.associate = function (models) {
   Profile.belongsTo(models.User,{foreignKey: 'user_Id'});
   Profile.hasMany(models.Skill, {
    foreignKey: {
      name: 'skill_Id',
      allowNull: true
    },
  });
  };
  return Profile;
};