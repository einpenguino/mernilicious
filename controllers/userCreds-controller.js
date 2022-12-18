const {UserCreds:model} = require('../models')
const asyncHandler = require("express-async-handler");
const generateToken = require("../services/generateToken");
const httpStatus = require('http-status')
const cookieParser = require('cookie-parser')
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = asyncHandler(async (req,res) => {  
    const {userName, password} = req.body
    console.log(req.body)
    try{ 
        //Check if user exist in the DB thru the username
        const checkUser = await model.findOne({"userName" : req.body.userName});
        console.log(checkUser)
        
        if (checkUser){
            const checkPassword = await bcrypt.compare(req.body.password, checkUser.password)
            if (checkPassword){
                // When both username and password matches , create a token and assign to the log in user
                const token = jwt.sign({_id: checkUser._id}, process.env.JWT_SECRET);
                res.cookie('jwt',token, {httpOnly: true , maxAge:60000});
                res.json(checkUser._id)
            }
            else{
                throw 'Password incorrect , try again'
            }
        }

        else{
            throw 'Username incorrect or does not exist, please sign up'
        }
    }
    catch(error){
        res.status(400).json(error); 
        console.log(error);     
    }  
    
});

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { userName: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await model.find(keyword).find({ _id: { $ne: req.user._id } });
    // const users = await model.find(keyword)
    res.send(users);
  });

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password, pic } = req.body;
  
    if (!userName || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all fields!");
    }
  
    const userExists = await model.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await model.create({
        userName,
      email,
      password,
      pic,
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create User!");
    }
  });

const authUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;

    const user = await model.findOne({ userName });

    if (user && (await user.matchPassword(password))) {
        res.json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid username or Password");
    }
});

const findAll = async (req, res) => {
    try{
        const keyword = req.query.search
        ? {
            $or: [
              { name: { $regex: req.query.search, $options: "i" } },
              { email: { $regex: req.query.search, $options: "i" } },
            ],
          }
        : {};
        console.log(keyword);
        const result = await model.find(req.query);
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await model.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const create = async (req, res) => {
    try{
        const result = await model.create(req.body);
        res.json(result)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const updateOne = async (req, res) => {
    try{
        const id = req.params.id;
        const updated = await model.updateOne({_id:id}, {$set:req.body});
        res.json(updated);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const updateMany = async (req, res) => {
    try{
        const result = await model.updateMany(req.query, {$set:req.body})
        res.json(result)
        // console.log(req.query)
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const deleteOne = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await model.deleteOne({_id:id});
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteMany = async (req, res) => {
    try {
        const result = await model.deleteMany(req.body)
        res.json(result)
    }catch(e){
        console.error(e)
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany, registerUser, authUser, allUsers,
    login
}