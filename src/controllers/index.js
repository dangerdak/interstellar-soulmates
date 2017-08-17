const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');
const editProfile = require('./editProfile');
const singles = require('./singles');
const errors = require('./errorhandlers');

const signUpPost = require('./signUpPost');
const signOut = require('./signOut');


router.get('/', home);
router.get('/singles', singles);
router.get('/sign-up', signUp);
router.get('/edit-profile', editProfile);
router.post('/sign-out', signOut);


router.post('/sign-up', signUpPost);

router.use(errors.client);
router.use(errors.server);


module.exports = router;
