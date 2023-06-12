const express = require("express");
const router = express.Router();
const protectedController = require("../controllers/protectedController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected route
router.get(
  "/protected",
  authMiddleware.authenticate,
  protectedController.protectedRoute
);

module.exports = router;
