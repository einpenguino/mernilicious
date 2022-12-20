const {UserCreds:model} = require('../models')
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require("../services/generateToken");
const httpStatus = require('http-status')

const authenticate = async (req, res) => {
    // const id = req.id
    if (req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer"))
    {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token)
        //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded.id)
        // console.log(UserCreds)
        req.user = await model.findById(decoded._id).select("-password");
        console.log(req.user)
    }
    
    // console.log(decoded)
    // const response = await model.findOne({_id:req.id})
}

module.exports = {authenticate}