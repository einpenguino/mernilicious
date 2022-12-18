const jwt = require("jsonwebtoken");
const {UserCreds} = require("../models");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const auth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // console.log(token)
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded.id)
      // console.log(UserCreds)
      req.user = await UserCreds.findById(decoded.id).select("-password");
      // const result = await UserCreds.find({_id:decoded.id})
      // console.log(result)

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
// next()
});

module.exports = { auth };
