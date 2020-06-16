const inventarioCtrl = {};
const rest = require('../configuration/rest');

// crear inventario y renderiza una nueva pagina 
inventarioCtrl.crearInventario = async(req, res, next) => {
    var requestBody = {
        "producto": req.body.producto,
        "cantidad": req.body.cantidad,
        "codigoBarras": req.body.codigoBarras,
        "lote": req.body.lote,
        "fechaVencimiento": req.body.fechaVencimiento
    }

    // consultar los proveedores
    rest.post(req, '/api/v1/inventario', requestBody)
        .then(result => {
            res.render('inventario', {
                modalCompleteMessage: 'Inventario creado exitosamente',
                modalCompleteHref: '/inventario'
            });
        })
        .catch(err => {

            console.log(err);
            
            var errorMessage;
            if (err.response && err.response.data && err.response.data.codigo && err.response.data.codigo === '40002') {
                errorMessage = 'Ya existe el código de barras en el inventario del producto';
            } else {
                errorMessage = 'Error en la operación';
            }

            const params = {
                includeInactive: false
            };

            rest.get(req, '/api/v1/productos', params)
                .then(result => {
                    res.render('inventario', {
                        productos: result.data,
                        modalCompleteMessage: errorMessage,
                        modalCompleteTitle: 'Error',
                        inventario: req.body
                    });
                })
                .catch(err => {
                    next(err);
                });
        });
};

// exportamos el modelo de las notas 
module.exports = inventarioCtrl;