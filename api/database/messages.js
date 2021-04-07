const Joi = require('joi');
const database = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
    imagePath: Joi.string().uri({
        scheme:[/https?/]
    }),
    createdAt: Joi.date()
});

const messages = database.get('messages');

function getAll() {
    //console.log('Log: messages.js:17', messages.find());
    return messages.find();
}

function create(message) {
    if(!message.username) message.username = 'Anonymous';
    
    ///debugger

    const result = schema.validate(message);

    if (1 == 1) {
        message.createdAt = new Date();
        console.log('Log: messages.js:28', message);
        //return messages.insert(message);

        messages.insert(message).then(newMessage => {
            res.json(newMessage);
          });

    }else{
        return Promisse.reject(result.error);
    }
}

module.exports = {
    getAll,
    create
}