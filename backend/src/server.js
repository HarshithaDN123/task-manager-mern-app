import dotenv from "dotenv";
import connectDB from "../config/db.js";
import app from "./app.js";

dotenv.config();

// Connect to MongoDB
connectDB();

// Port
const PORT = process.env.PORT || 5000;

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});