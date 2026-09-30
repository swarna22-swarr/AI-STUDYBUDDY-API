const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!/^mongodb(?:\+srv)?:\/\//.test(mongoUri || "")) {
    throw new Error(
      "Invalid MONGO_URI. Set it in .env to a MongoDB connection string starting with mongodb:// or mongodb+srv://."
    );
  }

  const conn = await mongoose.connect(mongoUri);
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
