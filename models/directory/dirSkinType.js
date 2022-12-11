const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directorySkinTypeSchema = new Schema(
    {
        skinType:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model("DirSkinType", directorySkinTypeSchema);