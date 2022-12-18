require("dotenv").config();
require('./models')
const dirActiveIngredientsSeed = require('./seedData/dirActiveIngredientsSeed')
const {
    Products,
    SkincareRegime,
    SkinGoalMapping,
    UserCreds,
    UserProfile,
    DirIngredients,
    DirProductID,
    DirProductType,
    DirSkinGoal,
    DirSkinType,
    DirUserName
} = require('./models')
const seedProducts = require('./seedData/seedProducts')
const {create:ProductCreate} = require('./controllers/product-controller')

const dirSkinTypeSeed = [
    {
        skinType:'dry'
    },
    {
        skinType:'oily'
    },
    {
        skinType:'combination'
    },
    {
        skinType:'normal'
    },
    {
        skinType:'all'
    }
]

const dirProductTypeSeed = [
    {
        productType:'cleanser'
    },
    {
        productType:'treatment'
    },
    {
        productType:'moisturiser'
    },
    {
        productType:'sunscreen'
    }
]

const dirSkinGoalSeed = [
    {
        skinGoal:'reduce breakout'
    },
    {
        skinGoal:'target hyper-pigmentation'
    },
    {
        skinGoal:'brighten'
    },
    {
        skinGoal:'minimise pores'
    },
    {
        skinGoal:'hydrate'
    },
    {
        skinGoal:'anti-aging'
    }
]

const performSeed = async () => {
    try{
        const createdSkinTypes = await DirSkinType.insertMany(dirSkinTypeSeed)
        console.log(`created ${dirSkinTypeSeed.length} Skin type directory entries!`)
    }catch(e){
        console.log(e)
    }
    try{
        const createdProductTypes = await DirProductType.insertMany(dirProductTypeSeed)
        console.log(`created ${dirProductTypeSeed.length} Product type directory entries!`)
    }catch(e){
        console.log(e)
    }
    try{
        const createdSkinGoals = await DirSkinGoal.insertMany(dirSkinGoalSeed)
        console.log(`created ${dirSkinGoalSeed.length} Skin Goals directory entries!`)
    }catch(e){
        console.log(e)
    }
    try{
        const createdActiveIngredients = await DirIngredients.insertMany(dirActiveIngredientsSeed)
        console.log(`created ${dirActiveIngredientsSeed.length} Active Ingredients directory entries!`)
    }catch(e){
        console.log(e)
    }
    try{
        // await ProductCreate(seedProducts)
        await Products.insertMany(seedProducts)
        console.log(`created ${seedProducts.length} Products directory entries!`)
    }catch(e){
        console.log(e)
    }
}

performSeed()
// console.log(seedProducts)

setInterval(()=>{
        console.log("Countdown 2s and exit...");
        process.exit(0);
    }, 2000)