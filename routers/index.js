const express = require('express');
const app = express();

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

// let p1 = new GenericCRUD(Products)
// // app.post('/products', create);
// app.get('/generic', 
//     // console.log('findAll')
//     // console.log(p1.findAll)
//     // p1.findAll
//     p1.printScheme
//     // (req, res) => {
//     //     res.send(`${p1.scheme}`)
//     // }
// )
// app.post('/generic', p1.create)

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`listening to port ${process.env.EXPRESS_PORT}`)
})