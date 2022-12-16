const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        // productID:{
        //     type:String, required:true, unique:true
        // },
        name:{
            type:String, required:true
        },
        price:{
            type:Schema.Types.Decimal128, required:true
        },
        
        skinType:{
            type:[{ type: String}], required:true
        },
        productType:{
            type:[{ type: String}], required:true
        },
        skinGoal:{
            type:[{ type: String}], required:true
        },
        description:{
            type:String
        },
        ingredients:{
            type:[{ type:String }]
        },
        // activeIngredients:{
        //     type:[{ type:String }], required:true
        // }
    }
)

module.exports = mongoose.model("Products", productSchema);