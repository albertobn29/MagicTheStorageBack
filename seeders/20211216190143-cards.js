'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('cards', [{
            id: 1,
            id_user: '1',
            multiverseid: '452935',
            nombre: 'Maga del gremio de la Liga',
            color: 'Rojo, Azul',
            cantidad: '2',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            id_user: '2',
            multiverseid: '376577',
            nombre: 'Maga del gremio de Vizkopa',
            color: 'Negro, Blanco',
            cantidad: '5',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            id_user: '1',
            multiverseid: '423765',
            nombre: 'Choque',
            color: 'Rojo',
            cantidad: '6',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            id_user: '2',
            multiverseid: '452945',
            nombre: 'Ral, virrey ízzet',
            color: 'Rojo, Azul',
            cantidad: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('cards', null, {});
    }
};
