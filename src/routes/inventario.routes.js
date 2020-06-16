// requerimos las dependencias instaladas anteriormente
var express = require('express');
var router = express.Router();
const auth = require("../configuration/authFilter");
// crud 
const {
    crearInventario
} = require('../controllers/inventario.controller');

router.post('/inventario/new-inventario', crearInventario);

router.use(auth.secureEndpoints);

module.exports = router