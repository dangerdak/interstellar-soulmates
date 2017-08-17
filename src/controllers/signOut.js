
const errors = require('../dictionary/errorMessages');

module.exports = (req, res) =>{
  req.session.destroy((err)=>{
    if (err) {

      res.status(500).send(errors[500]);
    }
    res.redirect('/');
  })

}
