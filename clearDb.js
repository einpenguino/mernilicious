require("dotenv").config();
const {
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
    DirUserName} = require("./models");

const clearAllData = async () => {
    await Products.deleteMany({});
    await SkincareRegime.deleteMany({});
    await SkinGoalMapping.deleteMany({});
    await UserCreds.deleteMany({});
    await UserProfile.deleteMany({});
    await DirIngredients.deleteMany({});
    // await DirProductID.deleteMany({});
    await DirProductType.deleteMany({});
    await DirSkinGoal.deleteMany({});
    await DirSkinType.deleteMany({});
    await DirUserName.deleteMany({});
}

clearAllData();

setInterval(()=>{
    console.log("Countdown 2s and exit...");
    process.exit(0);
}, 2000)