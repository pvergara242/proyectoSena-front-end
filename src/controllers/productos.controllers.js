const productosCtrl = {};
const rest = require('../configuration/rest');

// crear proveedor y renderiza una nueva pagina 
productosCtrl.crearProductos = async (req, res, next) => {
    var requestBody = {
        "proveedor": req.body.proveedor,
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "tipo": req.body.tipo,
        "precio": req.body.precio
    }
    // consultar los proveedores
    rest.post(req, '/api/v1/productos', requestBody)
        .then(result => {
            res.redirect('/productos/all');
        })
        .catch(err => {
            next(err);
        });
};

productosCtrl.renderProductos = async(req, res, next) => {
    const params = {
        includeInactive: true
    };

    rest.get(req, '/api/v1/productos', params)
        .then(result => {
            res.render('productos/all-productos', { productos: result.data });
        })
        .catch(err => {
            next(err);
        });
};

productosCtrl.renderEditarProductos= async(req, res, next) => {
    rest.get(req, '/api/v1/productos/' + req.params.id)
    .then(result => {
        res.render('productos/edit-productos', { productos: result.data });
    })
    .catch(err => {
        next(err);
    }); 
};

// actualiza los datos de un proveedor 
productosCtrl.renderActualizarProductos = async (req, res, next) => {
    var requestBody = {
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "tipo": req.body.tipo,
        "precio": req.body.precio
    }
    
    // 
    rest.put(req, '/api/v1/productos/' + req.body.productosId, requestBody)
        .then(result => {
        res.redirect('/productos/all');
    })
    .catch(err => {
        next(err);
    });
};

productosCtrl.deshabilitarProducto = async(req, res, next) => {
    rest.delete(req, '/api/v1/productos/' + req.body.id)
    .then(result => {
        res.status(204);
        res.send();
    })
    .catch(err => {
        next(err);
    }); 
};

productosCtrl.habilitarProducto = async(req, res, next) => {
    rest.patch(req, '/api/v1/productos/' + req.body.id + '/activate')
    .then(result => {
        res.status(204);
        res.send();
    })
    .catch(err => {
        next(err);
    }); 
};

// exportamos el modelo de las notas 
module.exports = productosCtrl;