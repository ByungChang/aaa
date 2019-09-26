'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20)
    },
    org_id: {  
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    user_pw: {
      allowNull: false,
      type: DataTypes.BLOB
    },
    user_group: {
      type: DataTypes.STRING(5)
    },
    company_id:{
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    user_auth: {
      type: DataTypes.STRING(5)
    },
    user_insert_dt: {
      type: DataTypes.DATE
    },
    user_yn: {
      type: DataTypes.STRING(1),
      defaultValue: "N"
    },
    insert_dt: {
      type: DataTypes.DATE
    },
    update_dt: {
      type: DataTypes.DATE
    },
    insert_id: {
      type: DataTypes.STRING(20)
    },
    update_id: {
      type: DataTypes.STRING(20)
    }
  }, {
    timestamps:false,
  });
  return user;
};