var express = require('express');
var router = express.Router();
const auth = require("../configuration/authFilter");

// crud 
const {
    crearUsuario: crearUsuario,
    renderUsuarios,
    renderEditarUsuarios,
    renderActualizarUsuario,
    deshabilitarUsuario,
    habilitarUsuario
} = require('../controllers/usuarios.controler');

//new note
router.post('/usuarios/new-usuario', crearUsuario);
router.get('/usuarios/all', renderUsuarios);
router.get('/usuarios/edit/:id', renderEditarUsuarios);
router.post('/usuarios/actualizar-usuario', renderActualizarUsuario);
router.post('/usuarios/deshabilitar-usuario', deshabilitarUsuario);
router.post('/usuarios/habilitar-usuario', habilitarUsuario);

router.use(auth.secureEndpoints);

module.exports = router