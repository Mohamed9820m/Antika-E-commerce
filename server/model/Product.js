const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const User = require('../model/User');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Category:{
    type:DataTypes.ENUM (['Furniture','Decor','Accessories','Vintage ','Tools'])
  }
});

Product.belongsTo(User);



module.exports = Product;
