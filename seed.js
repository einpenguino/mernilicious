require("dotenv").config();
// const {dirActiveIngredientsSeed} = require('./dirActiveIngredientsSeed')
// import { dirActiveIngredientsSeed } from "./dirActiveIngredientsSeed";
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

const dirActiveIngredientsSeed = [
    {'ingredients': 'benzoyl peroxide'},
    {'ingredients': 'retinol'},
    {'ingredients': 'bakuchiol'},
    {'ingredients': 'adapalene'},
    {'ingredients': 'salicylic acid(bha)'},
    {'ingredients': 'azelaic acid'},
    {'ingredients': 'alpha hydroxy acids-lactic acid'},
    {'ingredients': 'glycolic acid(aha)'},
    {'ingredients': 'tea tree oil'},
    {'ingredients': 'centella asiatica'},
    {'ingredients': 'vitamin c'},
    {'ingredients': 'kojic acid'},
    {'ingredients': 'retinol'},
    {'ingredients': 'tranexamic acid'},
    {'ingredients': 'niacinamide'},
    {'ingredients': 'mandelic acid'},
    {'ingredients': 'arbutin'},
    {'ingredients': 'alpha-arbutin'},
    {'ingredients': 'licorice root extract'},
    {'ingredients': 'hyaluronnic acid'},
    {'ingredients': 'glycerin'},
    {'ingredients': 'ceramides'},
    {'ingredients': 'squalane'},
    {'ingredients': 'lactic acid'},
    {'ingredients': 'sodium hyaluronate'},
    {'ingredients': 'amino acids'},
    {'ingredients': 'snail mucin'},
    {'ingredients': 'glycolic acid(aha)'},
    {'ingredients': 'peptides'},
    {'ingredients': 'grape seed extract'},
    {'ingredients': 'green tea extract'},
    {'ingredients': 'coenzyme q10'},
    {'ingredients': 'resveratrol'}]

const 
    
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
}

performSeed()

setInterval(()=>{
        console.log("Countdown 2s and exit...");
        process.exit(0);
    }, 2000)