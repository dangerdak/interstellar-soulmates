const dbConnection = require('./db/dbConnection');

const signIn = (email, cb) => {
  const sqlGetPassword = `SELECT password FROM users WHERE email = $1;`;
  dbConnection.query(sqlGetPassword, [email], (err, res) => {
    if (err) {
      cb(err);
    } else if (!res.rows[0]) {
      // TODO could create a custom error
      cb(null, '');
    } else {
      cb(null, res.rows[0].password);
    }
  });
};

// signIn('x@g', console.log);
module.exports = signIn;
