const jwt = require("jsonwebtoken");
const userCreds = require("../models");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  // let token;

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   try {
  //     token = req.headers.authorization.split(" ")[1];

  //     //decodes token id
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //     req.user = await userCreds.findById(decoded.id).select("-password");

  //     next();
  //   } catch (error) {
  //     res.status(401);
  //     throw new Error("Not authorized, token failed");
  //   }
  // }

  // if (!token) {
  //   res.status(401);
  //   throw new Error("Not authorized, no token");
  // }
next()
});

module.exports = { auth };
