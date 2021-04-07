const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors");
const morgan = require("morgan");

const config = require('config');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(morgan('tiny'));
    app.use(cors());
    app.use(bodyParser.json());

    //Setando variável da aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(bodyParser.json());

    consign({cwd: 'api'})
    //.then('data')
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};