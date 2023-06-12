const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new request
router.post(
  "/create",
  authMiddleware.authenticate,
  requestController.createRequest
);

// Read all requests
router.get(
  "/all",
  authMiddleware.authenticate,
  requestController.getAllRequests
);

// Update a request's state
router.patch(
  "/edit/:id/state",
  authMiddleware.authenticate,
  requestController.updateRequestState
);

module.exports = router;
