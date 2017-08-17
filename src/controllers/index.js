const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');
const saveProfile = require('./saveProfile');
const singles = require('./singles');
const getProfile = require('./getProfile');
const errors = require('./errorhandlers');


router.get('/', home);
router.get('/singles', singles);
router.get('/profile/:user_id', getProfile);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);
router.post('/save-profile', saveProfile);

router.post('/sign-up', function(req, res){
  res.redirect('/edit-profile');
});
router.use(errors.client);
router.use(errors.server);


module.exports = router;
