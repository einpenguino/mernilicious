const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directoryProductTypeSchema = new Schema(
    {
        productType:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model("DirProductType", directoryProductTypeSchema);