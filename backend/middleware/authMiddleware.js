/** @format */
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findOne({ _id: decoded.userId }, { password: 0 });
      req.user = user;

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
