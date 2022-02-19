var express = require('express');
const AuthController = require('./controllers/AuthController');
const CardController = require('./controllers/CardController');
const MazoCartasController = require('./controllers/Mazo-cartasController');
const MazoController = require('./controllers/MazoController');
const auth = require('./middleware/auth');
var router = express.Router();


router.get('/', (req, res) => res.status(200).send({
    message: 'api Magic The Storage',
}));

router.post('/login', AuthController.signIn);

router.post('/register', AuthController.signUp); 

router.get('/auth', auth, (req, res) => res.status(200).send({
    message: 'con token',
    user: req.user,
}));

router.post('/storeCard', auth, CardController.storeCard);
router.post('/getCards', auth, CardController.getCardsByUser);
router.post('/getUserCardsByName', auth, CardController.getUserCardsByName);

router.post('/createMazo', auth, MazoController.createMazo);
router.post('/getMazos', auth, MazoController.getMazosByUser);
router.post('/getMazo', auth, MazoController.getMazo);
router.post('/deleteMazo', auth, MazoController.deleteMazo);
router.post('/getCardsFromMazo', auth, MazoCartasController.getCartaFromMazo);
router.post('/addCarta', auth, MazoCartasController.addCartaToMazo);
router.post('/borrarFromMazo', auth, MazoCartasController.borrarFromMazo);


module.exports = router;
