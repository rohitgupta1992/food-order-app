const express = require('express');
const {CreateVandor,GetVanndors,GetVandorByID} = require('../controller/AdminController')
const router = express.Router();
router.post('/vendor', CreateVandor)
router.get('/vendor',GetVanndors)
router.get('/vendor/:id',GetVandorByID)
router.get('/',(req,res,next)=>{
  res.json("Hellow from Vendor")
    
})





module.exports = router;