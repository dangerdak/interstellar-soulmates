const dbConnection = require('./db/dbConnection');

const getProfile = (user_id, cb) => {
  const sqlGetProfile = `SELECT * FROM profiles WHERE user_id = $1;`;
  dbConnection.query(sqlGetProfile, [user_id], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows[0]);
    }
  });
};

// getProfile('1', console.log);
module.exports = getProfile;
