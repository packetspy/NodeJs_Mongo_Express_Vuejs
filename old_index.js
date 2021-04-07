const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const messages = require("./database/messages")

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({
        message: "Iniciando projeto de estudo com Mongo + NodeJs + Express + VueJs"
    })
})

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

app.post("/messages", (req,res) => {
    messages.create(req.body).then((message) => {
        res.json(message)
    }).catch((error) => {
        res.status(500);
        res.json(error)
    })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Ouvindo servidor na porta ${port}`);
})