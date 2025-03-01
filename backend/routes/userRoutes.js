import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);
router.post("/logout", logoutUser);

export default router;
