const express = require('express')
const router = express.Router();
const customerController = require("../controllers/customerController")
const authenticate = require("../utils/Middleware")


router.post('/customerSignup',customerController.customerSignUp)

router.put('/customerUpdate',authenticate,customerController.customerUpdate)

router.get('/customerGetDetais',customerController.gEtDetails)

router.delete('/customerDelete',customerController.deleteDetails)

router.put('/logoutUpdate',customerController.logoutUpdate)

router.put('/signinUpdate',customerController.signinUpdate)
module.exports = router;