const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Request = require("./request");

const RequestState = sequelize.define("RequestState", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Associations
RequestState.associate = (models) => {
  // Define associations here
  RequestState.hasMany(Request, { foreignKey: "requestStateId" });
};
module.exports = RequestState;
