const { Router } = require('express');
const router = Router();
// crud 
const { crearUsuario: crearUsuario } = require('../controllers/usuarios.controler');

//new note
router.post('/usuarios/new-usuario', crearUsuario);

module.exports = router