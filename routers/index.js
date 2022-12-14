const express = require('express');
const {DirSkinType, DirProductType, DirIngredients, DirSkinGoal, Products} = require('../models')
const {checkExists} = require('../services/checkExists')
const userRoutes = require('./userCreds-router')
const app = express();
const Products1 = require('../controllers/TrialCRUD')
const {deleteMany:DeletUsers, findAll:FindUsers, login, signUp} = require('../controllers/userCreds-controller')
let cors = require("cors");
const cookieParser = require('cookie-parser')
const productRoutes = require('./product-router')
const {authenticate} = require('../controllers/auth-controller')

const corsConfig = {
    credentials: true,
    origin: true,
    // origin:false,
    // origin:'*',
    // origin:[`${process.env.LOCALHOST}:4000/*`, `${process.env.LOCALHOST}:3000/*`]
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1 || !origin) {
    //       callback(null, true)
    //     } else {
    //       callback(new Error('Not allowed by CORS'))
    //     }
    //   }
};

// Middleware
app.use(cors(corsConfig))
// app.use(cors())
app.use(express.json());
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
// require('./product-router')(app)
app.use('/', productRoutes)
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
app.post('/auth', authenticate)
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