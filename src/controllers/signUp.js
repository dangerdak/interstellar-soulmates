module.exports = (req, res) => {
  req.session.userId = 1;
  res.render('signUp', { pageTitle: 'Sign Up'});
};
