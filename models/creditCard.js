const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CreditCard = sequelize.define("CreditCard", {
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  availableBalance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  pendingBalance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
});

CreditCard.associate = (models) => {
  // Define associations here
  CreditCard.belongsTo(models.User, { foreignKey: "userId" });
};

module.exports = CreditCard;
