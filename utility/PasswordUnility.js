const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const GenerateSalt = async () => {
    return await bcrypt.genSalt(10)    
}


const ValidatePassword = async(password,savepassword,salt)=>{
return await bcrypt.compare(password, savepassword)
}
 const GenerateSignature = async (payload) => {

   return jwt.sign(payload, "dgdgfdgfdgdgdg", { expiresIn: '90d'});
 }
const ValidateSignature  = async(req) => {

    const signature = req.get('Authorization');

    if(signature){
        try {
            const payload = await jwt.verify(signature.split(' ')[1], "dgdgfdgfdgdgdg") ; 
            req.user = payload;
            return true;

        } catch(err){
            return false
        } 
    }
    return false
};


module.exports = {ValidatePassword,GenerateSignature,GenerateSalt,ValidateSignature};
