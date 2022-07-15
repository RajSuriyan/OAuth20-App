//jshint esversion:6
require("dotenv").config();

const express=require('express');
const bodyParser=require('body-parser');
const ejs=require("ejs");
const mongoose=require("mongoose");

const app=express();

app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/usersDB");

const usersSchema=new mongoose.Schema({
    email:String,
    password:String
});

usersSchema.plugin(encrypt,{secret:process.env.SECRET,excludeFromEncryption: ['email']})


const User=mongoose.model("User",usersSchema);



app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});



app.post("/register",function(req,res){
  

});

app.post("/login",function(req,res){
    
  
        
        
    
    
});











app.listen(3000,function(){
    console.log("Server listening on port 3000");
});