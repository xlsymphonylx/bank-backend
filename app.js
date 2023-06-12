const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const bankAccountRoutes = require("./routes/bankAccountRoutes");
const requestRoutes = require("./routes/requestRoutes");

app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);
app.use("/bankAccount", bankAccountRoutes);
app.use("/request", requestRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
