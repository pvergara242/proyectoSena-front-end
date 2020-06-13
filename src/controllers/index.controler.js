const indexCrl = {};
const rest = require('../configuration/rest');
// renderizar la conexion con las interfaces de las paginas 
indexCrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCrl.renderAbout = (req, res) => {
    res.render('About')
};
indexCrl.renderproductos = (req, res) => {
    const params = {
        includeInactive: false
    };

    rest.get(req, '/api/v1/proveedores', params)
        .then(result => {
            //$('#exampleModal').modal('show');
            res.render('productos', { proveedores: result.data });
        })
        .catch(err => {
            next(err);
        });
};

indexCrl.renderUsuarios = (req, res) => {
    res.render('Usuarios')
};

indexCrl.renderProveedores = (req, res) => {
    res.render('Proveedores')
};

indexCrl.renderFactura = (req, res) => {
    res.render('Factura')
};

indexCrl.renderLogin = (req, res) => {
    res.render('Login')
};

indexCrl.renderLogout = (req, res, next) => {
	res.locals.usuario = false;
	res.locals.usuarioInfo = {};
    res.clearCookie('token', { path: '/' });
    res.clearCookie('usuario', { path: '/' });
    res.status(200);
    res.redirect('/');
};

module.exports = indexCrl;