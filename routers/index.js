const express = require('express');
const {DirSkinType, DirProductType, DirIngredients, DirSkinGoal, Products} = require('../models')
const {checkExists} = require('../services/checkExists')
const app = express();
const Products1 = require('../controllers/TrialCRUD')

// Middleware
app.use(express.json());

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
require('./userCreds-router')(app)
// User Profile
require('./userProfile-router')(app)

app.post('/trial', async (req, res) => {
    // console.log()
    Products1.findAll(req, res)
    // res.send('completed')
})

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})