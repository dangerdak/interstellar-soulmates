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

<<<<<<< HEAD
//signUp('a@g', 'cool', console.log);
//signUp('worf@enterprise', 'brave', console.log);
||||||| merged common ancestors
signUp('a@g', 'cool', console.log);
signUp('worf@enterprise', 'brave', console.log);
=======
// signUp('a@g', 'cool', console.log);
// signUp('worf@enterprise', 'brave', console.log);
>>>>>>> master
module.exports = signUp;
