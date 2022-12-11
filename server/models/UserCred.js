const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;


const userCredSchema = new Schema(
    {
        Username:{
            type:String, required:true, unique:true
        },

        Password:{
            type:String, required:true
        }

        
    }
)

const UserCreds = mongoose.model("UserCreds", userCredSchema);

module.exports = UserCreds;

