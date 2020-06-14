
// requerimos las dependencias instaladas anteriormente
var express = require('express');
var router = express.Router();
const auth = require("../configuration/authFilter");
// crud 
const {
    crearProductos,
    renderProductos,
    renderEditarProductos,
    renderActualizarProductos,
    deshabilitarProducto,
    habilitarProducto
} = require('../controllers/productos.controllers');

router.post('/productos/new-productos', crearProductos);
router.get('/productos/all', renderProductos);
router.get('/productos/edit/:id', renderEditarProductos);
router.post('/productos/actualizar-productos', renderActualizarProductos);
router.post('/productos/deshabilitar', deshabilitarProducto);
router.post('/productos/habilitar', habilitarProducto);

router.use(auth.secureEndpoints);

module.exports = router