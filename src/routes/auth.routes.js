// requerimos las dependencias 
    var express = require('express');
    var router = express.Router();


    const {
        ejecutarLogin
    } = require('../controllers/auth.controller');


    router.post('/auth/sign-in', ejecutarLogin);
    
    // restablecer contraseña
    router.get('/forgot', function(req, res) {
        res.render('forgot');
      });

    module.exports = router