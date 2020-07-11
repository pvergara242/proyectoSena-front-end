const proveedoresCtrl = {};
const rest = require('../configuration/rest');

// crear proveedor y renderiza una nueva pagina 
proveedoresCtrl.crearProveedor = async (req, res, next) => {
    var requestBody = {
        "nombre": req.body.nombre,
        "nit": req.body.nit,
        "email": req.body.email,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion
    }
    // consultar los proveedores
    rest.post(req, '/api/v1/proveedores', requestBody)
        .then(result => {
            res.render('Proveedores', {
                modalCompleteMessage: 'Proveedor creado exitosamente',
                modalCompleteHref: '/Proveedores'
            });
        })
        .catch(err => {
            next(err);
        });
};

proveedoresCtrl.renderProveedores = async(req, res, next) => {
    const params = {
        includeInactive: true
    };

    rest.get(req, '/api/v1/proveedores', params)
        .then(result => {
            //$('#exampleModal').modal('show');
            res.render('proveedores/all-proveedores', { proveedores: result.data });
        })
        .catch(err => {
            next(err);
        });
};

proveedoresCtrl.renderEditarProveedor = async(req, res, next) => {
    rest.get(req, '/api/v1/proveedores/' + req.params.id)
    .then(result => {
        res.render('proveedores/edit-proveedores', { proveedor: result.data });
    })
    .catch(err => {
        next(err);
    }); 
};

// actualiza los datos de un proveedor 
proveedoresCtrl.renderActualizarProveedor = async (req, res, next) => {
    var requestBody = {
        "nombre": req.body.nombre,
        "nit": req.body.nit,
        "email": req.body.email,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion
    }
    
    // 
    rest.put(req, '/api/v1/proveedores/' + req.body.proveedorId, requestBody)
        .then(result => {
        res.redirect('/proveedores/all');
    })
    .catch(err => {
        next(err);
    });
};

// funcion para deshabilitar proveedores 
proveedoresCtrl.deshabilitarProveedor = async(req, res, next) => {
    rest.delete(req, '/api/v1/proveedores/' + req.body.id)
    .then(result => {
        res.status(204);
        res.send();
    })
    .catch(err => {
        next(err);
    }); 
};

// funcion para habilitar los proveedores 
proveedoresCtrl.habilitarProveedor = async(req, res, next) => {
    rest.patch(req, '/api/v1/proveedores/' + req.body.id + '/activate')
    .then(result => {
        res.status(204);
        res.send();
    })
    .catch(err => {
        next(err);
    }); 
};

// exportamos el modelo de las notas 
module.exports = proveedoresCtrl;