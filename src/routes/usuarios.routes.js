const { Router } = require('express');
const router = Router();
require('./../js/usuarios');
// crud 
const { crearUsuario: crearUsuario, renderUsuarios, renderEditarUsuarios } = require('../controllers/usuarios.controler');

//new note
router.post('/usuarios/new-usuario', crearUsuario);

router.get('/usuarios/all', renderUsuarios);

router.get('/usuarios/edit/:id', renderEditarUsuarios);

module.exports = router