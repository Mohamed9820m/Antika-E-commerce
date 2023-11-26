const express = require("express");
const router = express.Router();
const AdminControler = require('../controllers/admin')

router.get("/sellers",AdminControler.getAllseller);
router.get("/clients",AdminControler.getAllclient);
router.get("/getAllProduct",AdminControler.getAllProducts);
router.get("/selectClientCount",AdminControler.SelectclientCount);
router.get("/selectSellerCount",AdminControler.SelectsellerCount);
router.get("/selectProductCount",AdminControler.SelectproductCount);
router.get("/getFurnitureProduct",AdminControler.getFurnitureProduct);
router.get("/getDecorProduct",AdminControler.getDecorProduct);
router.get("/getAccessoriesProduct",AdminControler.getAccessoriesProduct);
router.get("/getVintageProduct",AdminControler.getVintageProduct);
router.get("/sellerOrders/:id",AdminControler.sellerOrders);
router.get("/getCategoryProduct",AdminControler.getCategoryProduct);
router.get("/sellerproducts/:id",AdminControler.sellerproducts)
router.get("/sellerReviews/:id",AdminControler.sellerReviews)

// router.get("/productminPrice/:id",AdminControler.productminPrice);

router.delete("/deleteSeller/:id",AdminControler.deleteSeller)
router.delete("/deleteClient/:id",AdminControler.deleteClient)
router.delete("/deleteProduct/:id",AdminControler.deleteProduct)

// router.put('/updateProductCategory/:id',AdminControler.updateProductCategory)

// router.post('/addCategory',AdminControler.addCategoryValue)

module.exports = router;
