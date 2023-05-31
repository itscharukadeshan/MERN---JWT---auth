/** @format */
import express from "express";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(400).json;
  throw new Error("some thing went wrong");
  res.status(200).json({ massage: "auth user" });
});

export { authUser };
