const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageCover:{
    type:DataTypes.STRING,
    allowNull:true
  },
  imageProfile:{
    type:DataTypes.STRING,
    allowNull:true
  },
  role:{
    type:DataTypes.ENUM(['Client','Admin','Seller'])
  }
});



module.exports = User;
