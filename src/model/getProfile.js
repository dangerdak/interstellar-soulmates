const dbConnection = require('./db/dbConnection');

const getProfile = (name, cb) => {
  const sqlGetProfile = `SELECT * FROM profiles WHERE name = $1;`;
  dbConnection.query(sqlGetProfile, [name], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

// getProfile('1', console.log);
module.exports = getProfile;
