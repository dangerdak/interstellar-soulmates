module.exports = (req, res) => {
  console.log("editprofile handler", req.session);
  res.render('editProfile', { pageTitle: 'Edit your profile' });
};
