const CreditCard = require("../models/creditCard");

exports.getAllCreditCards = async (req, res) => {
  try {
    // Retrieve all credit cards
    const creditCards = await CreditCard.findAll();

    res.json(creditCards);
  } catch (error) {
    console.error("Error retrieving credit cards", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
