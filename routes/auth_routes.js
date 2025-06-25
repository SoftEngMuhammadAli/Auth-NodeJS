import express from "express";
import { signup, login } from "../controllers/auth_controller.js";
import authCheck from "../middlewares/auth_middleware.js";
import { UserModel } from "../models/auth_model.js";
const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route
router.get("/profile", authCheck, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user).select("name email");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: `You're Logged In: Welcome ${user.name}`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
