var express = require('express');
var router = express.Router();
require('./../js/usuarios');
// crud 
const {
    crearUsuario: crearUsuario,
    renderUsuarios,
    renderEditarUsuarios,
    renderActualizarUsuario,
    ejecutarLogin
} = require('../controllers/usuarios.controler');

//new note
router.post('/usuarios/new-usuario', crearUsuario);
router.get('/usuarios/all', renderUsuarios);
router.get('/usuarios/edit/:id', renderEditarUsuarios);
router.post('/usuarios/actualizar-usuario', renderActualizarUsuario);
router.post('/usuarios/sign-in', ejecutarLogin);

router.use(function(err, req, res, next) {
    if (!err) {
        console.log(err);
    }

    if (err.response.status === 401) {
        res.redirect('/Login');
    } else {
        console.log(err.response.status);
        res.redirect('/Error');
    }
});

module.exports = router