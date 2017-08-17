const {
  validate
} = require('./passwordModule')();
const errors = require('../dictionary/errorMessages');
const signIn = require('../model/signIn');


module.exports = (req, res) => {
  signIn(req.body.email, (err, userInfo) => {
    if (err) {
      res.status(500).send(errors[500]);
    } else if (userInfo && validate(req.body.password, userInfo.password)) {
      req.session.userId = userInfo.id;
      res.redirect('/singles');
    } else {
      console.log("Im here")
      res.redirect('/sign-up');
    }
  });
}
