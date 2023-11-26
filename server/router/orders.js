const express = require('express');
const router = express.Router();
const OrderController= require ("../controllers/orders")



router.get('/:UserId',  /*  middleware ,controller */OrderController.getAll);
router.get('/:UserId/:id',  /*  middleware ,controller */OrderController.getOne);
router.post('/creation/:UserId',  /*  middleware ,controller */OrderController.createOrder);
router.put('/:id',  /*  middleware ,controller */OrderController.updateOrder);
router.delete('/:id',  /*  middleware ,controller */OrderController.deleteOrder);




module.exports = router;
