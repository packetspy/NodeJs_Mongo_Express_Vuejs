const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({
        message: "Iniciando projeto de estudo com Mongo + NodeJs + Express + VueJs"
    })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Ouvindo servidor na porta ${port}`);
})