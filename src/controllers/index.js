const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');

router.get('/', home);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);
router.post('/sign-up', function(req, res){

  res.redirect('/edit-profile');
});

module.exports = router;
