const {UserCreds:model} = require('../models')
const asyncHandler = require("express-async-handler");
const generateToken = require("../services/generateToken");
const httpStatus = require('http-status')

const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    // const users = await model.find(keyword).find({ _id: { $ne: req.user._id } });
    const users = await model.find(keyword)
    res.send(users);
  });

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
  
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all fields!");
    }
  
    const userExists = await model.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await model.create({
      name,
      email,
      password,
      pic,
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await model.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await model.find(req.query).exec();
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
    create, findAll, deleteOne, updateOne, findOne, deleteMany, updateMany, registerUser, authUser, allUsers
}