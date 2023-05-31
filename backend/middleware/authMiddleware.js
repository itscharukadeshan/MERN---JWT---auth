/** @format */
import Jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select(-password);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Provided token is invalid. Authorization failed");
    }
  } else {
    res.status(401);
    throw new Error("No token provided. Authorization failed");
  }
});

export { protect };
