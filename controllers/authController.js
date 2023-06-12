const jwt = require("jsonwebtoken");
const { User, BankAccount } = require("../models");

const secretKey = "yourSecretKey";

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.create({
      password,
      firstName,
      lastName,
      email,
    });
    await BankAccount.create({
      accountNumber: "1234567890" + user.id, // Provide an appropriate account number
      balance: 10000.0,
      userId: user.id, // Assign the user ID to associate the bank account
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Error finding user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
