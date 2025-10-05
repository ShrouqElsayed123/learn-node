const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({ status: "fail", message: "Route not found" });
});

// Error handler
app.use(errorHandler);

module.exports = app;
