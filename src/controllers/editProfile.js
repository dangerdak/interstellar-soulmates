const errors = require('../dictionary/errorMessages');
const getProfile = require("../model/getProfile");

module.exports = (req, res) => {

  if (req.session.userId) {
    getProfile(req.session.userId, (err, profile) => {
      if (err) {
        res.status(500).send(errors[500]);
      } else if (profile == undefined) {
        res.status(404).send(errors[404]);
      } else {
        res.render("editProfile", { pageTitle: "Edit your profile", profile });
      }
    });
  } else {
    res.status(401).send(errors[401]);
  }
};
