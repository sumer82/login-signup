const express = require('express');
const User = require('../models/User');
const { registerValidation , loginvalidation} = require('../validation');
const router = express.Router();



router.post('/login', async (req,res) => {
    const {error} = loginvalidation(req.body);
    if(error){
        return res.render('login',{error:error.details[0].message});
    } 
   

    const user = await User.findOne({username : req.body.username});
    if(!user){
        return res.render('login',{message:"user not  registerd "});
    }
    else if(user.password == req.body.password){
        return res.render('login',{message:"user logged in sucessfully"});
    }
})

router.get('/' , (req,res) => {
    return res.render('login');
});

router.post('/register', async (req,res) => {
    console.log(req.body)
    //lets validate
    const {error} = registerValidation(req.body);
    if(error) return res.render('login',{error:error.details[0].message});
    
    //checking if user is already registerd
    const usernameExist = await User.findOne({username : req.body.username});
    const emailExists  = await User.findOne({email: req.body.email});
    if(usernameExist || emailExists){
        return res.render('login',{message:"user already   registerd "});
    }
    //create user 
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
        
    })
    try{
        const savedUser = await user.save();
        res.send(user);
    }catch(err){
        return res.render('login',{message:err});
    }
   
})

module.exports = router; 