const BankAccount = require("../models/bankAccount");

exports.debit = async (req, res) => {
  const { accountNumber, amount } = req.body;

  try {
    // Find the bank account
    const bankAccount = await BankAccount.findOne({ where: { accountNumber } });

    if (!bankAccount) {
      return res.status(404).json({ message: "Bank account not found" });
    }

    if (bankAccount.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    // Perform the debit operation
    bankAccount.balance -= amount;
    await bankAccount.save();

    res.json({ message: "Debit operation successful" });
  } catch (error) {
    console.error("Error debiting bank account", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.credit = async (req, res) => {
  const { accountNumber, amount } = req.body;

  try {
    // Find the bank account
    const bankAccount = await BankAccount.findOne({ where: { accountNumber } });

    if (!bankAccount) {
      return res.status(404).json({ message: "Bank account not found" });
    }

    // Perform the credit operation
    bankAccount.balance += amount;
    await bankAccount.save();

    res.json({ message: "Credit operation successful" });
  } catch (error) {
    console.error("Error crediting bank account", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
