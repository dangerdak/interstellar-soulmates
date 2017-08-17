const getProfile = require("../model/getProfile");

module.exports = (req, res) => {
  //TODO: change hardcoded user_id (1) to user_id taken from cookie
  getProfile(1, (err, profile) => {
    if (err) {
      res.status(500).send(errors[500]);
    } else if (profile == undefined) {
      res.status(404).send(errors[404]);
    } else {
      res.render("editProfile", { pageTitle: "Edit your profile", profile });
    }
  });
};
