'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Homem que desafiou o Diabo',
        author: 'Ojuara',
        pageQuantity: 666,
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'Apanhador de Sonhos',
        author: 'Stephen King',
        pageQuantity: 656,
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T19:37:32.514Z'),
        updatedAt: new Date('2022-01-28T19:37:32.514Z'),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
