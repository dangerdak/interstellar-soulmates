const dbConnection = require('./db/dbConnection');

const signIn = (email, cb) => {
  const sqlGetUser = `SELECT password, id FROM users WHERE email = $1;`;
  dbConnection.query(sqlGetUser, [email], (err, res) => {
    if (err) {
      cb(err);

    } else {
      cb(null, res.rows[0]);
    }
  });
};

// signIn('haksdhflkhladskfhx@g', console.log);
module.exports = signIn;
