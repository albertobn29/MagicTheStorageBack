const express = require('express');
const { sequelize } = require('./models/index');
var cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3500;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', (req, res) => res.status(200).send({
    message: 'Magic The Storage',
}));

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log('Conectado a la base de datos');
    })
});
