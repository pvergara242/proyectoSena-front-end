const indexCrl = {};
// renderizar la conexion con las interfaces de las paginas 
indexCrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCrl.renderAbout = (req, res) => {
    res.render('About')
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
	res.cookie('token', {}, { expires: new Date(Date.now()), path: '/' });
    res.cookie('usuario', {}, { expires: new Date(Date.now())    , path: '/' });
	res.clearCookie('token', {path:'/'});
	res.clearCookie('usuario', {path:'/'});
	res.status(200);
    res.render('index').send();
};


module.exports = indexCrl;