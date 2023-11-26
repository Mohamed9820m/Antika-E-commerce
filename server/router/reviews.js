const express = require('express');
const router = express.Router();
const {getAll, addReview}=require('../controllers/reviews')


router.get('/:id',/*  middleware ,controller */getAll);
router.post('/:ClientId/:ProductId',addReview);



module.exports = router;
