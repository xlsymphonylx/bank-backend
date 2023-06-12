const RequestState = require("../models/requestState");

exports.getAllRequestStates = async (req, res) => {
  try {
    // Retrieve all request states
    const requestStates = await RequestState.findAll();

    res.json(requestStates);
  } catch (error) {
    console.error("Error retrieving request states", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
