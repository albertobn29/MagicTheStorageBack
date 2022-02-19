'use strict';
const authConfig = require('../config/AuthConfing');
const bcrypt = require('bcrypt');


module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
            id: 1,
            username: 'Albertobn29',
            nombre: 'Alberto',
            apellidos: 'Benitez',
            email: 'albertobenitezn@gmail.com',
            password: bcrypt.hashSync('alberto12345', Number.parseInt(authConfig.rounds)),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            username: 'Manuel78',
            nombre: 'Manuel',
            apellidos: 'Gonzalez',
            email: 'manugon@gmail.com',
            password: bcrypt.hashSync('manugon', Number.parseInt(authConfig.rounds)),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ]);

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
