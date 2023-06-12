const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RequestType = sequelize.define("RequestType", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
RequestType.associate = (models) => {
  // Define associations here
  RequestType.hasMany(models.Request, { foreignKey: "requestTypeId" });
};

module.exports = RequestType;
