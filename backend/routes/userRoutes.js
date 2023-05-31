/** @format */

import express from "express";
const router = express.Router();

import { authUser } from "../controllers/user.js";

router.post("/auth", authUser);

export default router;
