"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("RequestState", [
      {
        description: "Iniciado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Aprobado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: "Cancelado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("RequestState", null, {});
  },
};
