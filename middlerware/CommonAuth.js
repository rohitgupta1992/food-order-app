const {ValidateSignature} = require('../utility/PasswordUnility');
 const Authenticate = async (req, res, next) => {

    const signature = await ValidateSignature(req);
    if(signature){
        return next()
    }else{
        return res.json({message: "User Not authorised"});
    }
}


module.exports = {Authenticate}