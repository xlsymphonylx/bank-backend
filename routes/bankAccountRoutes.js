const express = require("express");
const router = express.Router();
const bankAccountController = require("../controllers/bankAccountController");
const authMiddleware = require("../middleware/authMiddleware");

// Debit from bank account
router.post("/debit", authMiddleware.authenticate, bankAccountController.debit);

// Credit to bank account
router.post(
  "/credit",
  authMiddleware.authenticate,
  bankAccountController.credit
);

module.exports = router;
