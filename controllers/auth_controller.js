const { UserModel } = require("../models/auth_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists)
      return res
        .status(400)
        .json({ message: "Email is already is used by someone!" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = UserModel.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id);

    return res
      .status(201)
      .json({ token: token, user: { name: user.name, email: user.email } });
  } catch (error) {
    return res.status(500).json({
      error: error,
      message: "Server error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid Credientals" });
  if (!user) return res.status(404).json({ message: "User Not Found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user._id);
  res.status(200).json({
    token: token,
    user: { name: user.name, email: user.email },
    message: `User ${user.name} is Logged In Successfully!`,
  });
};
