const express = require('express')
const router = express.Router();
const customerController = require("../controllers/customerController")
const authenticate = require("../utils/Middleware")


router.post('/customerSignup',authenticate,customerController.customerSignUp)

router.put('/customerUpdate',authenticate,customerController.customerUpdate)

router.get('/customerGetDetais',authenticate,customerController.gEtDetails)

router.delete('/customerDelete',authenticate,customerController.deleteDetails)

router.put('/logoutUpdate',authenticate,customerController.logoutUpdate)

router.put('/signinUpdate',authenticate,customerController.signinUpdate)
module.exports = router;