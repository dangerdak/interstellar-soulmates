const getProfile = require('../model/getProfile');

module.exports = (req, res) => {
  res.render('singles', { pageTitle: 'Singles' });
};
