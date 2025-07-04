import express from "express";
import dotenv from "dotenv";
import connectionToDatabase from "./config/db";
import authRoutes from "./routes/auth_routes";

dotenv.config();
connectionToDatabase();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
