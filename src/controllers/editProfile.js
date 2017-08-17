const getProfile = require("../model/getProfile");

module.exports = (req, res) => {
  //TODO: get user id from cookie and pass to getProfile
  getProfile(user_id, (err, profile) => {
    if (err) {
      res.status(500).send(errors[500]);
    } else if (profile == undefined) {
      res.status(404).send(errors[404]);
    } else {
      res.render("editProfile", { pageTitle: "Edit your profile", profile });
    }
  });
};
