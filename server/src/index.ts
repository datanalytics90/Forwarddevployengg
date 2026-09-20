import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import redisClient from "./config/redis.js";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "FDEProject API is running",
  });
});

const startServer = async () => {
  try {
    await redisClient.connect();

    console.log("Redis connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();