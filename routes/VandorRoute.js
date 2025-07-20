const express = require('express');
const {Authenticate} = require('../middlerware/CommonAuth')
const {VadorLogin,GetVendorProfile} = require('../controller/VendorController')
const router = express.Router();
router.post('/login', VadorLogin)
router.use(Authenticate)
router.get('/profile', GetVendorProfile);






module.exports = router;