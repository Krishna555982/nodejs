const express = require('express')
const router = express.Router();
const customerController = require("../controllers/customerController")


router.post('/customerSignup',customerController.customerSignUp)

router.put('/customerUpdate',customerController.customerUpdate)
module.exports = router;