
// requerimos las dependencias anteriormente instaladas

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
var bodyParser = require("body-parser");
require('./js/usuarios');
require('./js/inventario');
require('./js/utilities');
var hbs = exphbs.create({});
require('handlebars-form-helpers').register(hbs.handlebars);

//inicializaciones
const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.use(bodyParser.json());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use(function(req,res,next){
	if (req.cookies && req.cookies.token) {
		req.headers.authorization = req.cookies['token'];
	}
    next();
});
app.use(function(req, res, next) {
	if (req.cookies && req.cookies['usuario']) {
		res.locals.usuario = true;
		res.locals.usuarioInfo = JSON.parse(req.cookies['usuario']);
	} else {
		res.clearCookie('token', { path:'/' });
		res.clearCookie('usuario', { path:'/' });
	}
  	next();
});

//rutas 
app.use(require('./routes/indexroutes'));
app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/proveedores.routes'));
app.use(require('./routes/productos.routes'));
app.use(require('./routes/inventario.routes'));
app.use(require('./routes/auth.routes'));

//static files 
app.use(express.static(path.join(__dirname, '/public')));


// exportamos la funcion 
module.exports = app;