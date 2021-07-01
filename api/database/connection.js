const connectionString = process.env.MONGO_URL || 'mongodb://root:p%40ck3tspy@127.0.0.1:27017/tutorialMnevStack'
const connectionAuthSource = process.env.MONGO_AUTH_SOURCE || {authSource:'admin'}

const monk = require('monk');
//const database = monk(connectionString, connectionAuthSource);
const database = require('monk')(connectionString, connectionAuthSource);

module.exports = database;
