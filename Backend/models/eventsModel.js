"use strict";

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo sequelize se encarga de definir los atributos de la tabla 'eventos' para el ORM
   *
   * @module Events
   *
   *
   */
  const Event = sequelize.define('Events', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      username: DataTypes.STRING,
      description: DataTypes.STRING,
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {}
  );

  Event.associate = function (models) {
  };
  return Event;
};
