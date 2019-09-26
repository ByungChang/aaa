'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT(20)
        },
        org_id: {  
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        user_pw: {
          allowNull: false,
          type: Sequelize.BLOB
        },
        user_group: {
          type: Sequelize.STRING(5)
        },
        company_id:{
          allowNull: false,
          type: Sequelize.BIGINT(20)
        },
        user_auth: {
          type: Sequelize.STRING(5)
        },
        user_insert_dt: {
          type: Sequelize.DATE
        },
        user_yn: {
          type: Sequelize.STRING(1),
          defaultValue: "N"
        },
        insert_dt: {
          type: Sequelize.DATE
        },
        update_dt: {
          type: Sequelize.DATE
        },
        insert_id: {
          type: Sequelize.STRING(20)
        },
        update_id: {
          type: Sequelize.STRING(20)   
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
    }
  };