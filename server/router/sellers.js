const express = require('express');
const router = express.Router();
const SellerController = require('../controllers/sellers');

function checkSellerRole(req, res, next) {
  if (req.user && req.user.role === 'Seller') {
    next();
  } else {
    return res.status(400).json({ error: 'Seller role required' });
  }
}

router.post('/', SellerController.createUser);
router.get('/', SellerController.getAllUsers);
router.get('/:id', SellerController.getUserById);
router.put('/:id', SellerController.updateUser);
router.delete('/:id', SellerController.deleteUser);

module.exports = router;
