const dbConnection = require('./db/dbConnection');

const updateProfile = (userData, userId, cb) => {
  const sqlUpdate = 'UPDATE profiles SET (name, species, image_url, cns, legs, interests) = ($1, $2, $3, $4, $5, $6) WHERE user_id=$7;';
  dbConnection.query(sqlUpdate, [userData.name, userData.species, userData.image_url, userData.cns, userData.legs, userData.interests, userId], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

// updateProfile({
//   name: 'zorg',
//   species: 'zaba',
//   legs: 6,
//   cns: true,
//   image_url: 'http://r.hswstatic.com/w_404/gif/alien-cuisine-quiz-orig.jpg',
//   interests: 'shopping',
// }, 1, console.log);

// updateProfile({
//   name: 'worf',
//   species: 'Klingon',
//   legs: 2,
//   cns: true,
//   image_url: 'https://upload.wikimedia.org/wikipedia/en/e/ed/WorfTNG.jpg',
//   interests: 'fighting',
// }, 2, console.log);

module.exports = updateProfile;
