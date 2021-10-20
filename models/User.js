const mongoose = require('mongoose');

const Userschema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        max:255
    },
    username:{
        type:String,
        required:true,
        min:9
    },
    password:{
        type:String,
        required:true,
        max:1024
    }
   
})

module.exports = mongoose.model('User',Userschema);
