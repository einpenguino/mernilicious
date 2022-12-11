require('dotenv').config();
const express = require("express");
const cors = require ("cors");
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

//Importing the Product.js models
const Products = require('./models/Product');

const UserCreds = require('./models/UserCred');

const app = express();
const PORT = 5000;

//Middleware-function that executes when a route is being hit

app.use(cors())
//To understand the incoming requests as JSON payloads we are using express.json() which is a built-in middleware function in Express.
app.use(express.json());



//Create a GET route, for getting all the product
app.get("/", async(req, res) => {
    try{
        const posts = await Products.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err})
    }
});

//Create a POST route, that create/upload new product into the DB
app.post("/", async (req,res) => {
   
    const post = new Products({
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
    const savedPost = await post.save();
    res.json(savedPost);
    }
    catch(err){
        res.json({message:err})
    }
    console.log('I got a request')
    console.log(req.body)
    
});


//Create a POST route, that creates new user (signup) and stored into the DB
app.post("/userCred", async (req,res) => {
   
    const user = new UserCreds({
        Username: req.body.username,
        Password: req.body.password
    });

    try{
    const savedUser = await user.save();
    res.json(savedUser);
    }
    catch(err){
        res.json({message:err})
    }
    console.log('I got a request')
    console.log(req.body)
    
});



//Connect to the DB
mongoose.connect(process.env.DB_CONNECTION, ()=>
    console.log("Connected to DB!")
)


//To start the server 
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});