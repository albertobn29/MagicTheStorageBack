const { users, cards } = require('../models/index');
const mtg = require('mtgsdk');
const { Op } = require("sequelize");

module.exports = {
    /**
     * Función que almacena una carta
     * @param {*} req 
     * @param {*} res 
     */
    storeCard(req, res) {
        try {
            cards.create({
                id_user: req.body.user_id,
                multiverseid: req.body.multiverseid,
                nombre: req.body.nombre,
                cantidad: req.body.cantidad,
                color: req.body.color
            }).then(cards => {
                res.json({
                    correcto: 'La carta se ha guardado correctamente'
                });
            }).catch(err => {
                if (err == 'SequelizeUniqueConstraintError: Validation error') {
                    res.json({
                        msg: 'Usuario ya registrado, use otro Username o Email'
                    });
                } else {
                    res.json({
                        msg: 'no se ha podido guardar la carta ' + err
                    });
                }
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se ha podido registrar ' + err
            });
        }
    },

    /**
     * Función que recoge las cartas de un usuario
     * @param {*} req 
     * @param {*} res 
     */
    getCardsByUser(req, res) {
        try {
            cards.findAll({
                where: {
                    id_user: req.body.user_id
                }
            }).then(cards => {
                res.json({
                    cards: cards
                });
            }).catch(err => {
                res.json({
                    msg: 'no se han podido coger las cartas del usuario ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se han podido coger las cartas del usuario ' + err
            });
        }
    },

    /**
     * Función que busca las cartas por nombre de un usuario
     * @param {*} req 
     * @param {*} res 
     */
    getUserCardsByName(req, res) {
        try {
            cards.findAll({
                where: {
                    [Op.and]: [{ id_user: req.body.user_id }, { nombre: { [Op.substring]: req.body.nombre } }]
                }
            }).then(cards => {
                res.json({
                    cards: cards
                });
            }).catch(err => {
                if (err == 'SequelizeUniqueConstraintError: Validation error') {
                    res.json({
                        msg: 'Usuario ya registrado, use otro Username o Email'
                    });
                } else {
                    res.json({
                        msg: 'no se ha podido guardar la carta ' + err
                    });
                }
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se ha podido registrar ' + err
            });
        }
    },
}
