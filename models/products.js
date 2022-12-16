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
            type:Schema.Types.Decimal128, required:true
        },
        
        skinType:{
            type:[{ type: Schema.Types.ObjectId, ref: 'DirSkinType' }], required:true
        },
        productType:{
            type:[{ type: Schema.Types.ObjectId, ref: 'DirProductType' }], required:true
        },
        skinGoal:{
            type:[{ type: Schema.Types.ObjectId, ref: 'DirSkinGoal' }], required:true
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