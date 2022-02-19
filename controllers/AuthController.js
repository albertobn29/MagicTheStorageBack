const { users } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/AuthConfing');

module.exports = {

    /**
     * Función que loguea a un usuario y le devuelve el token
     * @param {*} req 
     * @param {*} res 
     */
    signIn(req, res) {
        let { email, password } = req.body;
        users.findOne({
            where: {
                email: email
            }
        }).then(users => {
            if (!users) {
                res.json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, users.password)) {
                    let token = jwt.sign({ users: users }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        users: users,
                        token: token
                    })
                } else {
                    res.json({ msg: "Contraseña incorrecta" });
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },

    /**
     * Función que crea un usuario y devuelve su token
     * @param {*} req 
     * @param {*} res 
     */
    signUp(req, res) {
        try {
            let hashedpassword = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
            users.create({
                username: req.body.username,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: hashedpassword
            }).then(users => {
                let token = jwt.sign({ users: users }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    users: users,
                    token: token
                });
            }).catch(err => {
                if (err == 'SequelizeUniqueConstraintError: Validation error') {
                    res.json({
                        msg: 'Usuario ya registrado, use otro Username o Email'
                    });
                } else {
                    res.json({
                        msg: 'no se ha podido registrar ' + err
                    });
                }
            });
        } catch (err) {
            res.json({
                msg: 'no se ha podido registrar ' + err
            });
        }
    }
}