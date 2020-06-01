var express = require('express');
var router = express.Router();

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

router.use(function(err, req, res, next) {
    if (!err) {
        console.log(err);
    }

    if (err.response.status === 401) {
        res.redirect('/Login');
    } else {
        console.log(err.response.status);
        res.redirect('/Error');
    }
});

//exportamos routes
module.exports = router;