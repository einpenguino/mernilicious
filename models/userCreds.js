const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;


const userCredentialsSchema = new Schema(
    {
        userName:{type:String, required:true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        pic:{type:String,
        default:'https://cdn-icons-png.flaticon.com/512/149/149071.png'},
        isAdmin:{type:Boolean, default:false}
    },
    {timestamps:true}
)

// Schema Instance method to match Password
userCredentialsSchema.methods.matchPassword = async function (enteredPassword) {
  // Compare entered password with hash value stored in DB
    return await bcrypt.compare(enteredPassword, this.password);
};

userCredentialsSchema.pre("save", async function (next) {
  // If any of the user Creds field remains UNCHANGED, skip hashing
  if (!this.isModified) {
    next();
  }
  // If ANY user creds field changes, generate new hash
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("UserCreds", userCredentialsSchema);