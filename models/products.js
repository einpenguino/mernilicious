const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        productID:{
            type:String, required:true, unique:true
        },
        name:{
            type:String, required:true
        },
        price:{
            type:Schema.Types.Decimal128
        },
        
        skinType:{
            type:[{ type: String}], required:true
        },
        productType:{
            type:[{ type: String}], required:true
        },
        skinGoal:{
            type:[{ type: String}]
        },
        description:{
            type:String
        },
        ingredients:{
            type:[{ type:String }]
        },
        sensitive:{
            type:Boolean, required:true
        }
        // activeIngredients:{
        //     type:[{ type:String }], required:true
        // }
    }
)

module.exports = mongoose.model("Products", productSchema);