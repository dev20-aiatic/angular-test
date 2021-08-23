module.exports = (sequelize, DataTypes) => {
    /**
   * Este modelo  sequelize se encarga de definir los atributos de la tabla 'token' para el ORM
   * 
   * @module Token
   * 
   * 
   */
    const Token = sequelize.define('Token', {
    // Los atributos del modelo son definidos a partir de aquí
        token: DataTypes.STRING,
        UserId: DataTypes.INTEGER
    }, {});
    Token.associate = function(models) {
    };
    return Token;
};