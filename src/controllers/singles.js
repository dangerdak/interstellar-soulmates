const getSingles = require("../model/getSingles");
const errors = require('../dictionary/errorMessages');

module.exports = (req, res) => {
  if (req.session.userId) {
    getSingles((err, singles) => {
      if (err) {
        res.status(500).send(errors[500]);
      } else {
        res.render("singles", {
          pageTitle: "Singles",
          singles,
          user_id: req.session.userId
        });
      }
    });
  } else {
    res.status(401).send(errors[401]);
  }
};
