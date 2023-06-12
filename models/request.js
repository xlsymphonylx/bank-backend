const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const RequestState = require("./requestState");
const BankAccount = require("./bankAccount");
const CreditCard = require("./creditCard");
const RequestType = require("./requestType");

const Request = sequelize.define("Request", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations
Request.associate = (models) => {
  Request.belongsTo(models.User, { foreignKey: "userId" });
  Request.belongsTo(models.RequestState, { foreignKey: "requestStateId" });
  Request.belongsTo(models.RequestType, { foreignKey: "requestTypeId" });
  Request.belongsTo(models.BankAccount, {
    foreignKey: "subjectId",
    constraints: false,
  });
  Request.belongsTo(models.CreditCard, {
    foreignKey: "subjectId",
    constraints: false,
  });
};

module.exports = Request;
