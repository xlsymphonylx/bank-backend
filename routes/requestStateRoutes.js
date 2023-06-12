const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const requestStateController = require("../controllers/requestStateController");

// Read all credit cards
router.get(
  "/all",
  authMiddleware.authenticate,
  requestStateController.getAllRequestStates
);

module.exports = router;