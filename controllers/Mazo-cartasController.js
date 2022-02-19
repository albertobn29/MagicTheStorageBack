const { mazos_cartas } = require('../models/index');

module.exports = {
    /**
     * Funcion que obtiene el id de las cartas de un mazo
     * @param {*} req 
     * @param {*} res 
     */
    getCartaFromMazo(req, res) {
        try {
            mazos_cartas.findAll({
                where: {
                    id_mazo: req.body.mazo_id
                }
            }).then(mazos_cartas => {
                res.json({
                    mazos_cartas: mazos_cartas
                });
            }).catch(err => {
                res.json({
                    msg: 'no se han podido coger las cartas del mazo ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se han podido coger las cartas del mazo ' + err
            });
        }
    },

    /**
     * Función que añade una carta a un mazo
     * @param {*} req 
     * @param {*} res 
     */
    addCartaToMazo(req, res) {
        try {
            mazos_cartas.findOrCreate({
                where:{
                    id_carta: req.body.carta_id,
                    id_mazo: req.body.mazo_id,
                }
            }).then(mazos => {
                res.json({
                    correcto: 'La carta se ha registrado correctamente'
                });
            }).catch(err => {
                res.json({
                    msg: 'no se ha podido registrar la carta en el mazo ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se ha podido registrar la carta en el mazo ' + err
            });
        }
    },

    borrarFromMazo(req, res) {
        try {
            mazos_cartas.destroy({
                where:{
                    id_carta: req.body.carta_id,
                    id_mazo: req.body.mazo_id,
                }
            }).then(mazos => {
                res.json({
                    correcto: 'La carta se ha eliminado del mazo correctamente'
                });
            }).catch(err => {
                res.json({
                    msg: 'no se ha podido eliminar la carta del mazo ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se ha podido eliminar la carta del mazo ' + err
            });
        }
    }
}
