const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');
const singles = require('./singles');
const errors = require('./errorhandlers');
const session = require('express-session');

router.get('/', home);
router.get('/singles', singles);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);

router.post('/sign-up', function(req, res){
  res.redirect('/edit-profile');
});
router.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}));
router.use(errors.client);
router.use(errors.server);


module.exports = router;
