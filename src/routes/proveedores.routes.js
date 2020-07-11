
// requerimos las dependencias instaladas anteriormente
    var express = require('express');
    var router = express.Router();
    const auth = require("../configuration/authFilter");
// crud proveedores 
    const {
        crearProveedor,
        renderProveedores,
        renderEditarProveedor,
        renderActualizarProveedor,
        deshabilitarProveedor,
        habilitarProveedor
    } = require('../controllers/proveedores.controller');

 // metodo post envia los datos en este caso de proveedor 
    router.post('/proveedores/new-proveedor', crearProveedor);
// renderiza los datos creados anteriormente 
    router.get('/proveedores/all', renderProveedores);
// edita los datos que se crearon o todos los datos creados anteriormente 
    router.get('/proveedores/edit/:id', renderEditarProveedor);
// actualiza los datos 
    router.post('/proveedores/actualizar-proveedor', renderActualizarProveedor);
// inahibilita proveedores 
    router.post('/proveedores/deshabilitar', deshabilitarProveedor);
// habilita proveedores 
    router.post('/proveedores/habilitar', habilitarProveedor);

//le estamos diciendo al enrutador que use esa funcion para cualquier llamada que haga 
    router.use(auth.secureEndpoints);
     // valida si esta logueado o no esta logueado



// exportamos el modelo de la ruta 
    module.exports = router