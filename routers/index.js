const express = require('express');
const {DirSkinType, DirProductType, DirIngredients, DirSkinGoal, Products} = require('../models')
const {checkExists} = require('../services/checkExists')
const userRoutes = require('./userCreds-router')
const app = express();
const Products1 = require('../controllers/TrialCRUD')
const {deleteMany:DeletUsers, findAll:FindUsers, login, signUp} = require('../controllers/userCreds-controller')
let cors = require("cors");
const cookieParser = require('cookie-parser')

const corsConfig = {
    credentials: true,
    origin: true,
};

// Middleware
app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser())

app.use(express.static("public"))
// Endpoints
// Directory Endpoints
// Ingredients
require('./directory-routers/dirIngredients-router')(app)
// SkinGoal
require('./directory-routers/dirSkinGoal-router')(app)
// SkinType
require('./directory-routers/dirSkinType-router')(app)
// Product Type
require('./directory-routers/dirProductType-router')(app)

// Working Models
// Products
require('./product-router')(app)
// Skincare Regime
require('./skincareRegime-router')(app)
// Skin Goal Mapping
require('./skinGoal-router')(app)
// User Creds
// require('./userCreds-router')(app)
app.use('/user', userRoutes)
app.get('/users', FindUsers)
app.delete('/users', DeletUsers)
app.post("/login", login);
app.post('/signup', signUp)
// User Profile
require('./userProfile-router')(app)

// app.post('/trial', async (req, res) => {
//     // console.log()
//     Products1.findAll(req, res)
//     // res.send('completed')
// })

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})