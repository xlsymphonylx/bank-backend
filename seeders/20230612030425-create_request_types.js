"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("RequestType", [
      {
        description: "Agregado Tarjeta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Eliminacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("RequestType", null, {});
  },
};
