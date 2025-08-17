const express = require('express')
const router = express.Router();
const productController = require("../controllers/ProductControllers")

router.post("/addProduct",productController.addProductDetails)

router.put("/updateProducts",productController.updateProducts)

router.get("/getProductDetails",productController.getProductDetails)


module.exports = router