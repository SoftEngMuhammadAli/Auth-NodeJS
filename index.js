const express = require("express");
const dotenv = require("dotenv");
const connectionToDatabase = require("./config/db");
const authRoutes = require("./routes/auth_routes");

dotenv.config();
connectionToDatabase();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
