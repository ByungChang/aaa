'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      user_id:{
        allowNull: false,
        type: Sequelize.BIGINT(20)
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      remote_addr: {
        type: Sequelize.STRING(255)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('logins');
  }
};