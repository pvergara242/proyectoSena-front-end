
// requerimos las dependencias anteriormente instaladas 
    var express = require('express');
    var router = express.Router();
    const auth = require("../configuration/authFilter");

 // crud para usuarios 
    const {
        crearUsuario: crearUsuario,
        validate,
        renderUsuarios,
        renderEditarUsuarios,
        renderConsultarUsuario,
        renderActualizarUsuario,
        deshabilitarUsuario,
        habilitarUsuario
    } = require('../controllers/usuarios.controler');

//usuarios 
// metodo post envia los datos en este caso de usuario 
    router.post('/usuarios/new-usuario', validate('crearUsuario'), crearUsuario);
// renderiza los datos creados anteriormente 
    router.get('/usuarios/all', renderUsuarios);
// edita los datos que se crearon o todos los datos creados anteriormente 
    router.get('/usuarios/edit/:id', renderEditarUsuarios);
// muestra los datos que se crearon o todos los datos creados anteriormente 
    router.get('/usuarios/details/:id', renderConsultarUsuario);
// actualiza los datos 
    router.post('/usuarios/actualizar-usuario', renderActualizarUsuario);
// inahibilita un usuarios 
    router.post('/usuarios/deshabilitar-usuario', deshabilitarUsuario);
// habilita usuarios 
    router.post('/usuarios/habilitar-usuario', habilitarUsuario);

//le estamos diciendo al enrutador que use esa funcion para cualquier llamada que haga 
    router.use(auth.secureEndpoints);
// valida si esta logueado o no esta logueado

// exportamos el modelo de la ruta 
    module.exports = router