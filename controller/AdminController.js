const VendorModal = require('../models/Vendor')
const bcrypt = require('bcryptjs')
const {GenerateSalt} = require('../utility/PasswordUnility')
const CreateVandor = async (req , res) => {
    console.log("called 5")
    const { name, address, pincode, foodType, email, password, ownerName, phone }  =req.body;
    const existingVandor = await VendorModal.findOne({email:email})
    if(existingVandor) {
        return res.json({mag:"User already exist"})
    }
    console.log("called 10")
    const salt = await GenerateSalt()
    const hasPassword = await bcrypt.hash(password,salt)
const createVandor = await VendorModal.create({
    name:name,
    address:address,
    pincode:pincode,
    foodType:foodType,
    email:email,
    password:hasPassword,
     ownerName: ownerName,
     phone:phone,
     rating:0,
      serviceAvailable: false,
      salt:salt
})
    res.json(createVandor)
}

const GetVanndors = async (req , res) => {
const Vandors = await VendorModal.find()

res.json(Vandors)
}
const GetVandorByID = async (req , res) => {
    const vendorid = req.params.id;
    const vendor = await VendorModal.findById(vendorid)

    if(vendor !== null){
      return  res.status(201).json(vendor)
    }

res.json({msg:"vendor not found"})
}
module.exports = {CreateVandor,GetVandorByID , GetVanndors}