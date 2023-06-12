const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const creditCardController = require("../controllers/creditCardController");

// Read all credit cards
router.get(
  "/all",
  authMiddleware.authenticate,
  creditCardController.getAllCreditCards
);

module.exports = router;
