const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const skincareRegimeSchema = new Schema(
    {
        regimeID:{
            type:String, required:true, unique:true
        },
        procedure_AM_Cleanser:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_AM_Treatment:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_AM_Moisturiser:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_AM_Sunscreen:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_PM_Cleanser:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_PM_Treatment:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        },
        procedure_PM_Moisturiser:{
            type:[{type:Schema.Types.ObjectId, ref:'Products', required:true, unique:true}]
        }
    }
)

module.exports = mongoose.model("SkincareRegime", skincareRegimeSchema);