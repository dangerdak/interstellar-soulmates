const errors = require('../dictionary/errorMessages');

module.exports = (req, res) => {
  if (req.session.userId) {
    res.render('editProfile', {
      pageTitle: 'Edit your profile'
    });
  } else {
    res.status(401).send(errors[401]);
  }
};