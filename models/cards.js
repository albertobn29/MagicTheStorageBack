'use strict';
const {
    Model
} = require('sequelize');
const {users, mazos, mazos_cartas} = require('./index');
module.exports = (sequelize, DataTypes) => {
    class cards extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    cards.init({
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        multiverseid: {
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING
        },
        cantidad: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'cards',
    });
    return cards;
};