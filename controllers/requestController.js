const {
  Request,
  BankAccount,
  CreditCard,
  RequestState,
  RequestType,
  User,
} = require("../models");
// Create a new request
exports.createRequest = async (req, res) => {
  try {
    const { name, requestStateId, requestTypeId, subjectNumber } = req.body;
    // Verify and decode the JWT to retrieve the email
    const decodedToken = jwt.verify(token, "yourSecretKey");
    const email = decodedToken.email;

    // Find the user in the database using the email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Create the request in the database
    const request = await Request.create({
      name,
      userId: user.id,
      requestStateId,
      requestTypeId,
      subjectNumber,
    });

    res.status(201).json(request);
  } catch (error) {
    console.error("Error creating request", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read all requests
exports.getAllRequests = async (req, res) => {
  try {
    // Retrieve all requests from the database
    const requests = await Request.findAll();

    res.json(requests);
  } catch (error) {
    console.error("Error retrieving requests", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a request
exports.updateRequestState = async (req, res) => {
  try {
    const { id } = req.params;
    const { requestStateId } = req.body;
    const token = req.headers.authorization;

    // Verify and decode the JWT to retrieve the email
    const decodedToken = jwt.verify(token, "yourSecretKey");
    const email = decodedToken.email;

    // Find the user in the database using the email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the request in the database
    const request = await Request.findByPk(id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // Update the request's requestStateId in the database
    request.requestStateId = requestStateId;

    const { subjectNumber, requestTypeId } = request;

    if (requestTypeId) {
      const requestType = await RequestType.findByPk(requestTypeId);

      if (requestType) {
        if (requestType.description === "Eliminacion") {
          const requestState = await RequestState.findOne({
            where: { requestStateId, description: "Aprovado" },
          });

          if (requestState) {
            if (subjectNumber) {
              if (subjectNumber.startsWith("BANK")) {
                // Delete BankAccount
                await BankAccount.destroy({
                  where: { accountNumber: subjectNumber },
                });
              } else if (subjectNumber.startsWith("CARD")) {
                // Delete CreditCard
                await CreditCard.destroy({
                  where: { cardNumber: subjectNumber },
                });
              }
            }
          }
        } else if (requestType.description === "Agregado Tarjeta") {
          if (subjectNumber && subjectNumber.startsWith("CARD")) {
            // Create CreditCard
            await CreditCard.create({
              cardNumber: subjectNumber,
              availableBalance: 10000.0,
              pendingBalance: 0.0,
              userId: user.id,
            });
          }
        }
      }
    }

    await request.save();

    res.json(request);
  } catch (error) {
    console.error("Error updating request state", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
