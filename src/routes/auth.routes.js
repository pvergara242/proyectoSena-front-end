var express = require('express');
var router = express.Router();

const {
    ejecutarLogin
} = require('../controllers/auth.controller');


router.post('/auth/sign-in', ejecutarLogin);

module.exports = router