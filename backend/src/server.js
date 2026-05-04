import dotenv from "dotenv";
import connectDB from "../config/db.js";
import app from "./app.js";

dotenv.config();

// Connect to MongoDB
connectDB();

// Port
const PORT = process.env.PORT || 5000;

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});