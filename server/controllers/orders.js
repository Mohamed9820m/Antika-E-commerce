const Order = require('../model/Order')

const getAll = function(req,res){
    Order.findAll({where: { UserId: req.params.UserId } })
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOne = function(req,res){
  Order.findOne({where: {  UserId: req.params.UserId,id: req.params.id }})
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const createOrder = function(req,res){
  Order.create({ 
        orderDate:req.body.orderDate,
        totalAmount:req.body.totalAmount,
        quantity:req.body.quantity,
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt
      },
      {where: {  UserId: req.params.UserId }})
      .then((results) => {
        res.status(200).send(results); 
      })
      .catch((error) => {
        res.status(500).send(error);
      });
}



const updateOrder = function(req,res){
  Order.update(
  {orderDate:req.body.firstName,
    totalAmount:req.body.lastName,
    quantity:req.body.address,
    createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt
  },
  {where: { id: req.params.id } })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const deleteOrder = function(req,res){
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

module.exports = {getAll,getOne,updateOrder,deleteOrder,createOrder}