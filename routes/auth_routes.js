const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth_controller");
const authCheck = require("../middlewares/auth_middleware");

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route
router.get("/profile", authCheck, (req, res) => {
  res.json({ message: "You are logged in", userId: req.user });
});

module.exports = router;
