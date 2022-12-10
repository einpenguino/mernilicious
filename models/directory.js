const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directorySchema = new Schema(
    {
        skinGoal:{
            type:[{type:String}], required:true
        },
        productType:{
            type:[{type:String}], required:true
        },
        skinType:{
            type:[{type:String}], required:true
        },
        userName:{
            type:[{type:String}], required:true
        },
        productID:{
            type:[{type:String}], required:true
        },
        ingredients:{
            type:[{type:String}], required:true
        }
    }
)

module.exports = mongoose.model("Directory", directorySchema);