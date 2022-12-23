const {UserCreds:model} = require('../models')
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require("../services/generateToken");
const httpStatus = require('http-status')

const authenticate = async (req, res) => {
    // const id = req.id
    // console.log('authenticate called')
    console.log(req.headers.cookie)
    // if (req.headers.cookie && 
    //     req.headers.cookie.startsWith("alabaster")){
    if (req.headers.cookie){
    try{

        // console.log(req.headers.authorization)
        const token = req.headers.cookie.split("=")[1];
        console.log(token)
        //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.id)
        // console.log(UserCreds)
        req.user = await model.findById(decoded._id).select("-password");
        console.log(req.user)
        res.status(200).json({'isAdmin':req.user.isAdmin})
        
    }catch(e){
        console.log('token failed')
        res.sendStatus(400)
    }}else{
        res.sendStatus(400)
    }
        
        // console.log(decoded)
        // const response = await model.findOne({_id:req.id})
}
    

module.exports = {authenticate}