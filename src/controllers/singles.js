const getSingles = require("../model/getSingles");

module.exports = (req, res) => {
  getSingles((err, singles) => {
    if (err) {
      console.log(err);
      //TODO: handle error (500)
    } else {
      res.render("singles", { pageTitle: "Singles", singles });
    }
  });
};
