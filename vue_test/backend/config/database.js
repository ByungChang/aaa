const Sequelize  = require('sequelize');
module.exports = new Sequelize('orm_test','root','cosweal12345',{
  host:'192.168.0.201',
  dialect:'mysql',
  operatorsAliases:false,

  poll:{
    max:5,
    min:0,
    acquire : 30000,
    idle : 10000
  },
});
