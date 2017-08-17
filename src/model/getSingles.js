const dbConnection = require('./db/dbConnection');

const getSingles = (cb) => {
  const sqlGetSingles = `SELECT image_url, name FROM profiles;`;
  dbConnection.query(sqlGetSingles, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

// getSingles(console.log);
module.exports = getSingles;