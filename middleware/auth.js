const jwt= require('jsonwebtoken');
const config= require('config');

module.exports= (req, res, next) =>{
    const token= req.header('x-auth-token');
    if(token){
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        req.user=decoded.user;
        next();
    }
    else{
        return res.status(400).json({msg:"No token, authorization denied"});

    }
}