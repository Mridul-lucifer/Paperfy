require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret_key = process.env.secret_key;
const verification = async function (req,res,next) {
    let token = req.body.Authorization;
    if(token){
        req.userId = jwt.verify(token,secret_key);
        next();
    }else{
        console.log(token);
        res.status(400).json({
            msg : "Error in token"
        })
    }
}
module.exports = {verification};