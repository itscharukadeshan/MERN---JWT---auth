/** @format */

import express from "express";
const router = express.Router();

import {
  authUser,
  regUser,
  logOut,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", regUser);
router.post("/auth", authUser);
router.post("/logout", logOut);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
