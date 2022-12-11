const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directoryIngredientsSchema = new Schema(
    {
        ingredients:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model("DirIngredients", directoryIngredientsSchema);