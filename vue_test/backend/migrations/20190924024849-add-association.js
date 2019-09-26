'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('logins', ['user_id'], {
      type: 'FOREIGN KEY',
      references: {
        name: 'logins_user_id_users_fk',
        table: 'users',
        field: 'id'
      }      
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('logins', 'logins_user_id_users_fk');
  }
};
