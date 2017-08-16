const dbConnection = require('./dbConnection');

const sqlInsertUser = `INSERT INTO users (email, password) VALUES($1, $2);`;
const sqlInsertProfile = ``;