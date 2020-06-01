const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

//inicializaciones
const app = express();


//configuraciones 
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use(function(req,res,next){
	if (req.cookies && req.cookies['token']) {
		req.headers.authorization = req.cookies['token'];
	}
    next();
});

//variables globales 



//rutas 
app.use(require('./routes/indexroutes'));
app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/proveedores.routes'));


//static files 
app.use(express.static(path.join(__dirname, '/public')));


module.exports = app;