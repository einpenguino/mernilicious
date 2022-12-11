const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userCredentialsSchema = new Schema(
    {
        userName:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        DOB:{type:String, required:true}
    }
)

module.exports = mongoose.model("UserCreds", userCredentialsSchema);