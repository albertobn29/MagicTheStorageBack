const jwt = require('jsonwebtoken');
const AuthConfing = require('../config/AuthConfing');


module.exports = (req, res, next) => {
    /**
     * Comprueba que en el header se encuentra el token,
     * y en el caso que esté, verifica que es el original
     */
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied");
        
        const decoded = jwt.verify(token, AuthConfing.secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }

};