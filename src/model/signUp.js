const dbConnection = require("./db/dbConnection");

const signUp = (email, hashedPassword, cb) => {
  const sqlInsertUser = `INSERT INTO users (email, password) VALUES($1, $2);`;
  const sqlInsertProfile = `INSERT INTO profiles (user_id) VALUES((SELECT id FROM users WHERE email=$1));`;
  dbConnection.query(sqlInsertUser, [email, hashedPassword], (err, res) => {
      if(err) {
          cb(err);
      } else {
          dbConnection.query(sqlInsertProfile, [email], (err, res) => {
              if(err) {
                  cb(err);
              } else {
                  cb(null, res);
              }
          });
      }
  });
};

signUp('a@g', 'cool', console.log);
module.exports = signUp;

