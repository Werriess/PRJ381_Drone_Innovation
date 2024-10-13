import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_URL = process.env.DB_URL || "mongodb://mongo:mongo@mongodb:27017/Drone?authSource=admin";

    await mongoose.connect(DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
