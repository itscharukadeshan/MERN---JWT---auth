/** @format */
import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: "auth user" });
});
const regUser = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: "register user" });
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
