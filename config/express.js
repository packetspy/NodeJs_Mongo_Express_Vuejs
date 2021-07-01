const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const config = require('config');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(morgan('tiny'));
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    //Setando variável da aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    consign({cwd: 'api'})
    //.then('data')
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};