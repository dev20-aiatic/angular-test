"use strict";

module.exports = (sequelize, DataTypes) => {
  /**
   * Este modelo se encarga de definir los atributos de la tabla 'events'
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
