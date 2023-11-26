const Sequelize = require('sequelize');
require('dotenv').config()
const user=process.env.user||'root'
const password=process.env.password||'root'
const sequelize = new Sequelize('antik', user, password, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  sync:false,
});

sequelize.query("CREATE DATABASE IF NOT EXISTS `antik`;") // Create the database if it doesn't exist
  .then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
console.log(user)
module.exports = sequelize;