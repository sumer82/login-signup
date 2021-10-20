const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const path = require("path");
const postsroute = require('./routes/Routes');

const app = express();

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs');

//adding static files using   express.static module
app.use(express.static(__dirname + '/views'));
//app.use('/images', express.static(__dirname + '/views/Images'));

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use('/',postsroute);



mongoose.connect( 
    process.env.MONGO_DB,{useNewUrlParser:true}, () => {
    console.log('connected to database');
})


app.listen(3000, (err) => {
    if(err){
        console.log("error :",err)
    }
    else{
        console.log("server running");
    }
    
});