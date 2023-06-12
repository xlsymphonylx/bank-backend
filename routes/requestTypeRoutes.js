const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const requestTypeController = require("../controllers/requestTypeController");

// Read all credit cards
router.get(
  "/all",
  authMiddleware.authenticate,
  requestTypeController.getAllRequestTypes
);

module.exports = router;