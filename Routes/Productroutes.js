const express = require('express')
const router = express.Router();
const productController = require("../controllers/ProductControllers")

router.post("/addProduct",productController.addProductDetails)

module.exports = router