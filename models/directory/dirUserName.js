const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const directoryUserNameSchema = new Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = mongoose.model("DirUserName", directoryUserNameSchema);