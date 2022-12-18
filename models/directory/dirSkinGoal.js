const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directorySkinGoalSchema = new Schema(
    {
        skinGoal:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model("DirSkinGoal", directorySkinGoalSchema);