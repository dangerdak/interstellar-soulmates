const express = require('express');

const router = express.Router();
const home = require('./home');
const signUp = require('./signUp');

router.get('/', home);
router.get('/sign-up', signUp);

module.exports = router;
