const proveedoresCtrl = {};
const rest = require('../configuration/rest');

// crear las notas y renderiza una nueva pagina 
proveedoresCtrl.crearProveedor = async (req, res, next) => {
    var requestBody = {
        "nombre": req.body.nombre,
        "nit": req.body.nit,
        "email": req.body.email,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion
    }
    
    rest.post(req, '/api/v1/proveedores', requestBody)
        .then(result => {
            res.redirect('/proveedores/all');
        })
        .catch(err => {
            next(err);
        });
};

proveedoresCtrl.renderProveedores = async(req, res, next) => {
    rest.get(req, '/api/v1/proveedores')
        .then(result => {
            //$('#exampleModal').modal('show');
            res.render('proveedores/all-proveedores', { proveedores: result.data });
        })
        .catch(err => {
            next(err);
        });
};

// exportamos el modelo de las notas 
module.exports = proveedoresCtrl;