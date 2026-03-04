require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// connect to MongoDB
connectDB();

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 8000;

// IMPORTANT FIX: explicitly bind to 127.0.0.1
app.listen(PORT, "127.0.0.1", () => {
  console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
});
