// Import dependencies
const mongoose = require("mongoose");
const Products = require('./products.js')
// const Products = require('../models')
const SkincareRegime = require('./skincareRegime')
const SkinGoalMapping = require('./skinGoal')
const UserCreds = require('./userCreds')
const UserProfile = require('./userProfile')
const DirIngredients = require('./directory/dirIngredients')
// const DirProductID = require('./directory/dirProductID')
const DirProductType = require('./directory/dirProductType')
const DirSkinGoal = require('./directory/dirSkinGoal')
const DirSkinType = require('./directory/dirSkinType')
const DirUserName = require('./directory/dirUserName')

// Config
// const mongoURI = process.env.MONGO_CLOUD_URL;
// const mongoURI = 'mongodb://127.0.0.1:27017/mern';
const mongoURI = `mongodb+srv://${process.env.MONGO_CLOUD_USER}:${process.env.MONGO_CLOUD_PW}@${process.env.MONGO_CLOUD_CLUSTER}`
const db = mongoose.connection;

// Connect
mongoose.connect(mongoURI, ()=>{
    console.log("Connection to Mongo DB established.");
});

// Helpful events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

module.exports = {
    Products,
    SkincareRegime,
    SkinGoalMapping,
    UserCreds,
    UserProfile,
    DirIngredients,
    // DirProductID,
    DirProductType,
    DirSkinGoal,
    DirSkinType,
    DirUserName
}