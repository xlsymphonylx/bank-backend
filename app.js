const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const bankAccountRoutes = require("./routes/bankAccountRoutes");
const requestRoutes = require("./routes/requestRoutes");
const creditCardRoutes = require("./routes/creditCardRoutes");
const requestStateRoutes = require("./routes/requestStateRoutes");
const requestTypeRoutes = require("./routes/requestTypeRoutes");

app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);
app.use("/bankAccount", bankAccountRoutes);
app.use("/request", requestRoutes);
app.use("/creditcard", creditCardRoutes);
app.use("/requestState", requestStateRoutes);
app.use("/requestType", requestTypeRoutes);




// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
