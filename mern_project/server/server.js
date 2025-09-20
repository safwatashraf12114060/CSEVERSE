import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import connectDb from "./db/connect.js";
import studentRouter from "./routes/studentRoutes.js";
import resourceRouter from "./routes/resourceRoutes.js";

dotenv.config();
connectDb();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use("/api/students", studentRouter);
app.use("/api/resources", resourceRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running successfully' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});