
//requerimos las dependencias instaladas anteriormente
    var express = require('express');
    var router = express.Router();
    const auth = require("../configuration/authFilter");
    
//crud productos
    const {
        crearProductos,
        renderProductos,
        renderEditarProductos,
        renderConsultarProductos,
        renderActualizarProductos,
        deshabilitarProducto,
        habilitarProducto
    } = require('../controllers/productos.controllers');

//metodo post envia los datos en este caso de productos
    router.post('/productos/new-productos', crearProductos);
//renderiza los datos creados anteriormente 
    router.get('/productos/all', renderProductos);
//edita los datos que se crearon o todos los datos creados anteriormente 
    router.get('/productos/edit/:id', renderEditarProductos);
//consultar los datos 
    router.get('/productos/details/:id', renderConsultarProductos);
//actualiza los datos 
    router.post('/productos/actualizar-productos', renderActualizarProductos);
// inahibilita un producto
    router.post('/productos/deshabilitar', deshabilitarProducto);
//habilita producto
    router.post('/productos/habilitar', habilitarProducto);

//le estamos diciendo al enrutador que use esa funcion para cualquier llamada que haga 
    router.use(auth.secureEndpoints);
     // valida si esta logueado o no esta logueado

//exportamos el modelo de la ruta 
    module.exports = router