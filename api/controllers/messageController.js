const uuidv4 = require('uuid/v4');
const messages = require("../database/messages")

module.exports = app => {
    const controller = {};
 
    controller.listMessages = (req, res) => {
        messages.getAll().then((messages) => {
            res.json(messages);
        });
    }

    controller.saveMessage = (req, res) => {
        messages.create(req.body).then((message) => {
            res.json(message)
        }).catch((error) => {
            res.status(500);
            res.json(error)
        })
    }

    controller.deleteMessage = (req, res) => {
        res.status(200).json({
          "message":`Fake delete message`,
          "success":true,
        })
    }

    controller.updateMessage = (req, res) => {
        res.status(200).json({
            "message":`Fake update message`,
            "success":true,
          })
    }
      return controller;
  }