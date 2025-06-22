const express = require('express');
require('dotenv').config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require('./db/connectDB');
const { connectCloudinary } = require('./configs/cloudinary');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  "http://localhost:5173",                 // dev
  "https://aluno-blond.vercel.app",       // ✅ frontend in production
];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// API Routes


app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    connectCloudinary();
    app.listen(PORT, () =>
      console.log(` Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(" Failed to start server:", error);
  }
};

startServer();
