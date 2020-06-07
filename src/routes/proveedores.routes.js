var express = require('express');
var router = express.Router();
const auth = require("../configuration/authFilter");
// crud 
const {
    crearProveedor,
    renderProveedores,
    renderEditarProveedor,
    renderActualizarProveedor
} = require('../controllers/proveedores.controller');

router.post('/proveedores/new-proveedor', crearProveedor);
router.get('/proveedores/all', renderProveedores);
router.get('/proveedores/edit/:id', renderEditarProveedor);
router.post('/proveedores/actualizar-proveedor', renderActualizarProveedor);

router.use(auth.secureEndpoints);

module.exports = router