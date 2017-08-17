const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');
const singles = require('./singles');
const getProfile = require('./getProfile');
const errors = require('./errorhandlers');


router.get('/', home);
router.get('/singles', singles);
router.get('/profile/:name', getProfile);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);

router.post('/sign-up', function(req, res){
  res.redirect('/edit-profile');
});
router.use(errors.client);
router.use(errors.server);


module.exports = router;
