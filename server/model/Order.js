const { DataTypes } = require('sequelize');
const User = require('../model/User');
const sequelize = require('../db/db.connect');

const Order = sequelize.define('Order', {
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.belongsTo(User);

module.exports = Order;
