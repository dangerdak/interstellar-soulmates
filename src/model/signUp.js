const dbConnection = require("./db/dbConnection");

const signUp = (email, hashedPassword, cb) => {
  const sqlInsertUser = `INSERT INTO users (email, password) VALUES($1, $2);`;
 const returnID = 'SELECT id FROM users WHERE email=$1'
  const sqlInsertProfile = `INSERT INTO profiles (user_id) VALUES((SELECT id FROM users WHERE email=$1)) RETURNING user_id;`;
  dbConnection.query(sqlInsertUser, [email, hashedPassword], (err, result) => {
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

//signUp('a@g', 'cool', console.log);
//signUp('worf@enterprise', 'brave', console.log);
module.exports = signUp;
