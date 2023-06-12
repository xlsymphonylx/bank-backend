const Sequelize = require("sequelize");
const database = require("../config/database");

const sequelize = database;

const User = require("./user");
const BankAccount = require("./bankAccount");
const RequestType = require("./requestType");
const RequestState = require("./requestState");
const Request = require("./request");
const CreditCard = require("./creditCard");


User.associate(sequelize.models);
BankAccount.associate(sequelize.models);
RequestState.associate(sequelize.models);
CreditCard.associate(sequelize.models);
RequestType.associate(sequelize.models);
Request.associate(sequelize.models);

const models = {
  User,
  BankAccount,
  RequestType,
  RequestState,
  Request,
  CreditCard,
};

sequelize.models = models;

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
