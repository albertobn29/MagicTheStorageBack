'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('mazos_cartas', [{
            id: 1,
            id_mazo: '1',
            id_carta: '452935',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            id_mazo: '1',
            id_carta: '423765',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            id_mazo: '3',
            id_carta: '376577',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            id_mazo: '4',
            id_carta: '452945',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('mazos_cartas', null, {});
    }
};
