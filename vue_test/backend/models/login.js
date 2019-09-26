'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(20)
      },
      user_id: {
        allowNull: false,
        type: DataTypes.BIGINT(20)
      },
      date_created: {
        allowNull: false,
        type: DataTypes.DATE
      },
      remote_addr: {
        type: DataTypes.STRING(255)
      }
  }, {
    timestamps:false,
  });

  return login;
};