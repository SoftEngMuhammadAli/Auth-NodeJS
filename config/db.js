import mongoose from "mongoose";

async function connectionToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database Successfully!");
  } catch (error) {
    console.error(`Error Connecting to Database: > ${error.message}`);
  }
}

module.exports = connectionToDatabase;
