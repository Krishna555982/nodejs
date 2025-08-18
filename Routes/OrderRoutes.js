const expres = require('express')
const router = expres.Router();
const OrderController = require("../controllers/OrderCotroller")

router.post("/addOrderDetails",OrderController.addOrderDetails)


module.exports = router;