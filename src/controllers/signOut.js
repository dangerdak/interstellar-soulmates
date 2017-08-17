const errors = require('./errorhandlers');

module.exports = (req, res) =>{
  req.session.destroy((err)=>{
    if (err) {
      console.log('ll', req.session);
      res.status(500).send(errors[500]);
    }
    res.redirect('/');
  })

}
