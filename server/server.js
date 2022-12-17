require('dotenv').config();
const httpStatus = require("http-status");
const bcrypt = require('bcrypt');
const express = require("express");
const cors = require ("cors");
const jwt = require ("jsonwebtoken");

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

//Importing the models
const Products = require('./models/Product');

const UserCreds = require('./models/UserCred');

const app = express();
const PORT = 5000;

//Middleware-function that executes when a route is being hit

app.use(cors())
//To understand the incoming requests as JSON payloads we are using express.json() which is a built-in middleware function in Express.
app.use(express.json());




//Create a GET route, for getting all the product
app.get("/prod", async(req, res) => {
    try{
        const prods = await Products.find();
        res.json(prods);
    }
    catch(err){
        res.json({message:err})
    }
});

//Create a POST route, that create/upload new product into the DB
app.post("/", async (req,res) => {
   
    const prod = new Products({
        Product_ID: req.body.p_id,
        Name: req.body.name,
        Price: req.body.price,
        Product_Type:req.body.prodtype,
        Description:req.body.desc,
        Skin_Type:req.body.skintype,
        Ingredients:req.body.ing,
        Active_Ingredients:req.body.act_ing,
        Prod_Image:req.body.img

    });

    try{
    const savedProd = await prod.save();
    res.json(savedProd);
    }
    catch(err){
        res.json({message:err})
    }
    console.log('I got a request')
    console.log(req.body)
    
});




//Create a POST route, that creates new user (signup) and stored into the DB
app.post("/userCred", async (req,res) => {

   const hash = await bcrypt.hash(req.body.password, 10)
    const user = new UserCreds({
        Name: req.body.name,
        Username: req.body.username,
        Password: hash
    });

    try{
    const savedUser = await user.save();
    res.json(savedUser);
    }
    catch(error){
        res.status(400).send(error.message); 
        console.log(error.message);     
    }  
});


//Create a POST route, that validates user login from the DB
app.post("/login", async (req,res) => {  
 
    try{ 
        //Check if user exist in the DB thru the username
        const checkUser = await UserCreds.findOne({Username: req.body.username});
        if (checkUser){
            const checkPassword = await bcrypt.compare(req.body.password, checkUser.Password)
            if (checkPassword){

                // When both username and password matches , create a token and assign to the log in user
                const token = jwt.sign({_id: checkUser._id}, process.env.TOKEN_SECRET);
                res.header('auth-token').json(token)
            }
            else{
                res.status(400).json('Password incorrect , try again')
            }
        }
        else{
            res.status(400).json('Email incorrect or does not exsit, pls sign up')
        }

    
    }
    catch(error){
        res.status(400).send(error.message); 
        console.log(error.message);     
    }  
});




//Connect to the DB
mongoose.connect(process.env.DB_CONNECTION, ()=>
    console.log("Connected to DB!")
)


//To start the server 
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});