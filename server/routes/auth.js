// server/routes/auth.js
import express from "express";
import { signup, login, getMe } from "../controllers/AuthController.js";
import passport from "passport";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route - requires valid JWT token
// Note: getMe handles token verification internally
router.get("/me", getMe);

export default router;
