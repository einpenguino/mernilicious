const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        // productID:{
        //     type:String, required:true, unique:true
        // },
        productID:{
            type:String
        },
        name:{
            type:String, required:true, unique:true
        },
        price:{
            type:Schema.Types.Decimal128, default:0.0
        },
        // skinType:{
        //     type:[{ type: String}], required:true
        // },
        // productType:{
        //     type:[{ type: String}], required:true
        // },
        // skinGoal:{
        //     type:[{ type: String}]
        // },
        skinType:{
            type: String, required:true
        },
        productType:{
            type: String, required:true
        },
        skinGoal:{
            type: String
        },
        description:{
            type:String
        },
        ingredients:{
            type:[{ type:String }]
        },
        sensitive:{
            type:Boolean, required:true, default:false
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Products", productSchema);