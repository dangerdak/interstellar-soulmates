const { sign } = require("./passwordModule")();
const errors = require("../dictionary/errorMessages");
const signUp = require("./../model/signUp");
const signIn = require("./../model/signIn");

module.exports = (req, res) => {
  signIn(req.body.email, (err, userData) => {
    if (err) {
      res.status(500).send(errors[500]);
    } else if (userData) {
      res.status(200).send('The email you entered is already associated with an account.');
    }
    else {
      const hashedPassword = sign(req.body.password);
      if (req.body.password !== req.body.confirmPassword) {
        res.status(200).send('The passwords you entered do not match.');
      } else {
        signUp(req.body.email, hashedPassword, (err, response) => {
          if (err) {
            res.status(500).send(errors[500]);
          } else {
            req.session.userId = response.rows[0].user_id;
            res.redirect("/edit-profile");
          }
        });
      }
    }
  });
};
