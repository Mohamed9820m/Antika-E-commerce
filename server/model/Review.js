const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const User = require('../model/User');
const Product = require('./Product');

const Review = sequelize.define('Review', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = Review;
