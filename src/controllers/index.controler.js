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


module.exports = indexCrl;