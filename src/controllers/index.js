const express = require('express');

const router = express.Router();
const home = require('./home');

router.get('/', home);

module.exports = router;
