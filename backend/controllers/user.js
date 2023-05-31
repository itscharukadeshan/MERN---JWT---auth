/** @format */
import express from "express";
import asyncHandler from "express-async-handler";
import genToken from "../utils/genToken.js";
import User from "../models/user.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    genToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const regUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    genToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data check the name , email and password");
  }
});
const logOut = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: "user logged out" });
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: "user profile" });
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: " updated user profile" });
});
export { authUser, regUser, logOut, getUserProfile, updateUserProfile };
