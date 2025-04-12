import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URL = process.env.MONGODB_URL;
    await mongoose.connect(URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
