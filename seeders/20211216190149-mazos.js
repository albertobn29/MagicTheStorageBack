'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('mazos', [{
        id: 1,
        id_user: '1',
        nombre: 'Mazo1-alberto',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        id_user: '1',
        nombre: 'mazo2-alberto',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        id_user: '2',
        nombre: 'Mazo1',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        id_user: '2',
        nombre: 'mazo2',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('mazos', null, {});
  }
};
