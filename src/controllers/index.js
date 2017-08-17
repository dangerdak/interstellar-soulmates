const express = require('express');
const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');
const saveProfile = require('./saveProfile');
const singles = require('./singles');
const getProfile = require('./getProfile');
const errors = require('./errorhandlers');
const signUpPost = require('./signUpPost');
const signOut = require('./signOut');
const signInPost = require('./signInPost');

router.get('/', home);
router.get('/singles', singles);
router.get('/profile/:user_id', getProfile);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);

router.post('/sign-out', signOut);
router.post('/sign-up', signUpPost);
router.post('/save-profile', saveProfile);
router.post('/sign-in', signInPost);

router.use(errors.client);
router.use(errors.server);


module.exports = router;
