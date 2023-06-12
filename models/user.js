const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
User.associate = (models) => {
  // Define associations here
  User.hasMany(models.BankAccount, { foreignKey: "userId" });
  User.hasMany(models.Request, { foreignKey: "userId" });
};

module.exports = User;
