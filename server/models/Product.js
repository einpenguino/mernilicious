const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        Product_ID:{
            type:String, required:true, unique:true
        },

        Name:{
            type:String, required:true
        },

        Price:{
            type:Number, required:true
        },

        Product_Type:{
            type:String, required:true
        },

        Description:{
            type:String, required:true
        },

        Skin_Type:{
            type:Array, required:true
        },

        Ingredients:{
            type:String
        },

        Active_Ingredients:{
            type:Array, required:true
        },

        Prod_Image:{
            data: Buffer,
            contentType: String
        }


        
    }
)

const Products = mongoose.model("Products", productSchema);

module.exports = Products;

