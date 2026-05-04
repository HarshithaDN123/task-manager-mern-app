import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
app.use("/", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;