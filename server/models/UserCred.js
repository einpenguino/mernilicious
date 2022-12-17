const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userCredSchema = new Schema(
    {
        Name:{
            type:String, required:true,
        },

        Username:{
            type:String, required:true, unique:true, lowercase: true
        },

        Password:{
            type:String, required:true
        }

        
    }
)

const UserCreds = mongoose.model("UserCreds", userCredSchema);



module.exports = UserCreds;

