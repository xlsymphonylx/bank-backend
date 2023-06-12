const RequestType = require("../models/requestType");

exports.getAllRequestTypes = async (req, res) => {
  try {
    // Retrieve all request types
    const requestTypes = await RequestType.findAll();

    res.json(requestTypes);
  } catch (error) {
    console.error("Error retrieving request types", error);
    res.status(500).json({ message: "Internal server error" });
  }
};