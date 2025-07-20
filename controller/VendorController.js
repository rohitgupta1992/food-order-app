const VendorModal = require('../models/Vendor');
const {ValidatePassword,GenerateSignature} = require('../utility/PasswordUnility');
const VadorLogin = async(req,res,next)=>{
    const {email,password} = req.body;

    const existvandor = await VendorModal.findOne({email:email})

    if(existvandor !== null){
        const validate = await ValidatePassword(password,existvandor.password,existvandor.salt)
   
   if(validate){
console.log(existvandor)
    const token = await GenerateSignature({
        id:existvandor._id,
        email:existvandor.email
    })
return res.json(token)
   }else{
    return res.json({"message":"password is not valid"})
   }
    }



}
const GetVendorProfile = async (req,res,next)=>{

}

const UpdateVendorProfile = async(req,res,next)=>{

}
const UpdateVendorCoverImage = async(req,res,next)=>{

}
const UpdateVendorService = async(req,res,next)=>{

}


module.exports ={VadorLogin,GetVendorProfile}