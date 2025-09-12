const express = require('express')
const router = express.Router();
const OrderController = require("../controllers/OrderCotroller")

router.post("/addOrderDetails",OrderController.addOrderDetails)

router.put('/updateOrderDetails',OrderController.updateOrderDetails)

router.get('/getOrderDetails',OrderController.getOrderDetails)

router.delete('/deleteOrderDetails',OrderController.deleteOrderDetails)

module.exports = router;