const { mazos } = require('../models/index');

module.exports = {
    /**
     * Función que crea los mazos
     * @param {*} req 
     * @param {*} res 
     */
    createMazo(req, res) {
        try {
            mazos.create({
                id_user: req.body.user_id,
                nombre: req.body.nombre,
            }).then(mazos => {
                res.json({
                    correcto: 'El mazo se ha creado correctamente'
                });
            }).catch(err => {
                if (err == 'SequelizeUniqueConstraintError: Validation error') {
                    res.json({
                        msg: 'Mazo con ese nombre ya registrado, use otro nombre porfavor'
                    });
                } else {
                    res.json({
                        msg: 'no se ha podido crear el mazo ' + err
                    });
                }
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se ha podido crear el mazo ' + err
            });
        }
    },

    /**
     * Función que recoge los mazos de un usuario
     * @param {*} req 
     * @param {*} res 
     */
    getMazosByUser(req, res) {
        try {
            mazos.findAll({
                where: {
                    id_user: req.body.user_id
                }
            }).then(mazos => {
                res.json({
                    mazos: mazos
                });
            }).catch(err => {
                res.json({
                    msg: 'no se han podido coger los mazos del usuario ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se han podido coger los mazos del usuario ' + err
            });
        }
    },

    /**
     * Función que obtiene un mazo
     * @param {*} req 
     * @param {*} res 
     */
    getMazo(req, res) {
        try {
            mazos.findAll({
                where: {
                    id: req.body.mazo_id
                }
            }).then(mazos => {
                res.json({
                    mazo: mazos
                });
            }).catch(err => {
                res.json({
                    msg: 'no se han podido coger el mazo del usuario ' + err
                });
            });
        } catch (err) {
            res.status(500).json({
                msg: 'no se han podido coger el mazo del usuario ' + err
            });
        }
    },

    /**
     * Función que borra un mazo
     * @param {*} req 
     * @param {*} res 
     */
    deleteMazo(req,res){
        try{
            mazos.destroy({
                where:{
                    id: req.body.mazo_id
                }
            })
        }catch (err) {
            res.status(500).json({
                msg: 'no se han podido borrar el mazo del usuario ' + err
            });
        }
    }

}