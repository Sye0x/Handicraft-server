// src/routes/auth.ts
import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/me", authenticate, (req, res) => {
  return res.status(200).json({
    message: "Authenticated successfully",
    data: res.locals.user,
  });
});

export default router;
