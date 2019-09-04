const express=require('express');
const router= express.Router();
const config=require('config')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const gravatar= require('gravatar');
const { check, validationResult } = require('express-validator');

const User= require('../../models/User');

router.post('/register',[check('name','Name is require').not().isEmpty(),check('email','Email is require').isEmail(), check('password', 'Password minimum is 6').isLength({ min: 6 }),check('password1', 'Password minimum is 6').isLength({ min: 6 })
] ,async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var {name, email, password, password1}=req.body;

    //Check retype password
    if(password!==password1){
        return res.send('Retyped password is not match');
    }

     //See if user exists
     try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg:"User has already existed"}]})
        }

    //Get users gravatar
    const avatar = gravatar.url(email,{
        s: '200',
        r:'pg',
        d:"mm"
    })


    //Hash password 
    const salt= await bcrypt.genSalt(10);
    password= await bcrypt.hash(password, salt);

    // Create user in db
    
        user = new User({
            name, 
            email, 
            avatar, 
            password
        })
        await user.save();
        //jsonwebtoken
        jwt.sign(
            {user:{id: user.id}}, config.get('jwtsecret'), { expiresIn: 36000 },(err,token)=>{
            if(err) throw err
            res.json({token})
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

//Login
router.post('/login', [check('email','Email is require').isEmail(), check('password', 'Password is required').not().isEmpty()] ,async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const {email, password}= req.body;

    try {
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({errors: [{msg:"User has not created"}]})
    }
    
    // Check the password
    let password_correct= await bcrypt.compare(password, user.password);
    if(!password_correct){
        return res.status(401).json({errors:[{msg: "User is not authorized!"}]})
    }
    jwt.sign(
        {user:{id: user.id}}, config.get('jwtsecret'), { expiresIn: 36000 },(err,token)=>{
        if(err) throw err
        res.json({token})
    });
} catch (error) {
    console.log(error.message);
        res.status(500).send('Server error');
}


})

module.exports=router;