require('./directory');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userProfileSchema = new Schema(
    {
        userName:{type: Schema.Types.ObjectId, ref:'UserCreds', required:true, unique:true},
        skinType:{type: Schema.Types.ObjectId, ref:'DirSkinType', required:true},
        skinSensitivity:{type:Boolean, required:true},
        skinGoal:{type: Schema.Types.ObjectId, ref:'DirSkinGoal', required:true},
        regimeID:[{type: Schema.Types.ObjectId, ref:'SkincareRegime', required:true}]
    }
)

module.exports = mongoose.model("UserProfile", userProfileSchema);