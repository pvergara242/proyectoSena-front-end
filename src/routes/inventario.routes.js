//requerimos las dependencias instaladas anteriormente
    var express = require('express');
    var router = express.Router();
    const auth = require("../configuration/authFilter");
    
//crud inventarios 
    const {
        crearInventario
    } = require('../controllers/inventario.controller');

//metodo post envia los datos en este caso de inventarios
    router.post('/inventario/new-inventario', crearInventario);

//le estamos diciendo al enrutador que use esa funcion para cualquier llamada que haga 
    router.use(auth.secureEndpoints);
    // valida si esta logueado o no esta logueado

//exportamos el modelo de la ruta 
    module.exports = router