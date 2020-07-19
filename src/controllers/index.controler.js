        const indexCrl = {};
        const rest = require('../configuration/rest');

//renderizar la conexion con las interfaces de las paginas 
        indexCrl.renderIndex = (req, res) => {
            res.render('index')
        };

// renderiza la conexion con datos personales 
        indexCrl.renderAbout = (req, res) => {
            res.render('About')
        };
// renderiza la conexion con productos 
        indexCrl.renderproductos = (req, res, next) => {
            const params = {
                includeInactive: false
            };

// valida si el producto ha sido creado con proveedores 
            rest.get(req, '/api/v1/proveedores', params)
                .then(result => {
                    res.render('productos', { proveedores: result.data });
                })
// de lo contrario muestra un error 
                .catch(err => {
                    next(err);
                });
        };

// renderiza la conexion con usuarios 
        indexCrl.renderUsuarios = (req, res) => {
            res.render('Usuarios')
        };

// renderiza la conexion con proveedores
        indexCrl.renderProveedores = (req, res) => {
            res.render('Proveedores')
        };

// renderiza la conexion con inventarios
        indexCrl.renderInventario = (req, res, next) => {
            const params = {
                includeInactive: false
            };

// valida si el produto se creo exitosamente en inventario con la cantidad correcta
            rest.get(req, '/api/v1/productos', params)
                .then(result => {
                    res.render('inventario', { productos: result.data });
                })
// de lo contrario saldra error 
                .catch(err => {
                    next(err);
                });
        };

// renderiza la conexion con la factura
        indexCrl.renderFactura = (req, res) => {
            console.log('ejecutando factura desde index');
            let usuario = JSON.parse(req.cookies['usuario']);

            console.log('usuario: ', usuario);
            console.log('URL: ', '/api/v1/usuarios/' + usuario.id + '/factura');

            var defaultProducto = {};
            var productos = [];
            rest.get(req, '/api/v1/usuarios/' + usuario.id + '/factura')
            .then(result => {
                if (result.data.detalles.length > 0) {
                    productos.push(result.data.detalles, defaultProducto);
                } else {
                    productos.push(defaultProducto);
                }
                res.render('Factura', { numeroRemision: result.data.numero, productos: productos });
            })
            .catch(err => {
                console.log(err);

                res.render('index', {
                    modalCompleteMessage: 'Error en la operación',
                    modalCompleteTitle: 'Error'
                });
            });
        };

// renderiza la conexion con el login 
        indexCrl.renderLogin = (req, res) => {
            res.render('Login')
        };

 // cierra sesion 
        indexCrl.renderLogout = (req, res, next) => {
            res.locals.usuario = false;
            res.locals.usuarioInfo = {};
            res.clearCookie('token', { path: '/' });
            res.clearCookie('usuario', { path: '/' });
            res.status(200);
            res.redirect('/');
        };



// exportamos el modelo
        module.exports = indexCrl;