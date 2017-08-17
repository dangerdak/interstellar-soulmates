const express = require('express');

const router = express.Router();
const home = require('./home');
const singles = require('./singles');

router.get('/', home);
router.get('/singles', singles);

module.exports = router;
