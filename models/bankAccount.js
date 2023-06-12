const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BankAccount = sequelize.define('BankAccount', {
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0
  }
});


BankAccount.associate = (models) => {
  // Define associations here
  BankAccount.belongsTo(models.User, { foreignKey: 'userId' });
};


module.exports = BankAccount;