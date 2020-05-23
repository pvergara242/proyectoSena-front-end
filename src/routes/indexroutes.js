
// requerimos express y router
const { Router } = require('express');
const router = Router();

// conexion con las interfaces 
const {
    renderIndex,
    renderAbout,
    renderUsuarios,
    renderProveedores,
    renderFactura,
    renderLogin
} = require('../controllers/index.controler')

router.get('/', renderIndex);

router.get('/About', renderAbout);

router.get('/Usuarios', renderUsuarios);

router.get('/Proveedores', renderProveedores);

router.get('/Factura', renderFactura);

router.get('/Login', renderLogin);


//exportamos routes
module.exports = router;