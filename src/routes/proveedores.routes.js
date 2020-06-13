
// requerimos las dependencias instaladas anteriormente
var express = require('express');
var router = express.Router();
const auth = require("../configuration/authFilter");
// crud 
const {
    crearProveedor,
    renderProveedores,
    renderEditarProveedor,
    renderActualizarProveedor,
    deshabilitarProveedor,
    habilitarProveedor
} = require('../controllers/proveedores.controller');

router.post('/proveedores/new-proveedor', crearProveedor);
router.get('/proveedores/all', renderProveedores);
router.get('/proveedores/edit/:id', renderEditarProveedor);
router.post('/proveedores/actualizar-proveedor', renderActualizarProveedor);
router.post('/proveedores/deshabilitar', deshabilitarProveedor);
router.post('/proveedores/habilitar', habilitarProveedor);

router.use(auth.secureEndpoints);

module.exports = router