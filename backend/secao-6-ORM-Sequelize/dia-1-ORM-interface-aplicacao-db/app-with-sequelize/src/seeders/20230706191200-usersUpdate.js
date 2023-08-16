'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      fullName: 'Vitor Gaia Martins',
      email: 'user@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'Jester James',
      email: 'edu@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
