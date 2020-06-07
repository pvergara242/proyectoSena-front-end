var express = require('express');
var router = express.Router();
// crud 
const {
    ejecutarLogin
} = require('../controllers/auth.controller');

//new note
router.post('/auth/sign-in', ejecutarLogin);

module.exports = router