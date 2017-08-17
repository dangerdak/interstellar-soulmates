const getSingles = require("../model/getSingles");
const msg = require('../dictionary/errorMessages');

module.exports = (req, res) => {
  getSingles((err, singles) => {
    if (err) {
      console.log(err);
      res.status(500).send(msg[500]);
    } else {
      res.render("singles", { pageTitle: "Singles", singles });
    }
  });
};
