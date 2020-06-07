const usuariosCtrl = {};
const rest = require('../configuration/rest');

// crear las notas y renderiza una nueva pagina 
usuariosCtrl.crearUsuario = async (req, res, next) => {
    var requestBody = {
        "tipoDocumento": req.body.tipoDocumento,
        "numeroDocumento": req.body.numDoc,
        "fechaNacimiento": req.body.fechaNac,
        "genero": req.body.genero,
        "nombres": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefonoFijo": req.body.tel_fij,
        "celular": req.body.celular,
        "direccion": req.body.direccion,
        "correo": req.body.direc,
        "clave": req.body.contraseña[0],
        "rol": req.body.rol
    }
    
    rest.post(req, '/api/v1/usuarios', requestBody)
    .then(result => {
        res.redirect('/usuarios/all');
    })
    .catch(err => {
        next(err);
    });    
};

usuariosCtrl.renderUsuarios = async(req, res, next) => {
    rest.get(req, '/api/v1/usuarios')
    .then(result => {
        let data = result.data;
        res.render('usuarios/all-usuarios', { usuarios: data });
    })
    .catch(err => {
        next(err);
    });
};

usuariosCtrl.renderEditarUsuarios = async(req, res, next) => {
    rest.get(req, '/api/v1/usuarios/' + req.params.id)
    .then(result => {
        let data = result.data;
        let date = new Date( Date.parse(data.datosPersonales.fechaNacimiento) );
        let fechaNacimiento = date.toISOString().slice(0, 10);
        data.datosPersonales.fechaNacimiento = fechaNacimiento;
        res.render('usuarios/edit-usuarios', { usuario: data });
    })
    .catch(err => {
        next(err);
    }); 
};

usuariosCtrl.renderActualizarUsuario = async (req, res, next) => {
    var requestBody = {
        "tipoDocumento": req.body.tipoDocumento,
        "numeroDocumento": req.body.numDoc,
        "fechaNacimiento": req.body.fechaNac,
        "genero": req.body.genero,
        "nombres": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefonoFijo": req.body.tel_fij,
        "celular": req.body.celular,
        "direccion": req.body.direccion,
        "correo": req.body.direc,
        "rol": req.body.rol
    }
    
    rest.put(req, '/api/v1/usuarios/' + req.body.usuarioId, requestBody)
        .then(result => {
        res.redirect('/usuarios/all');
    })
    .catch(err => {
        next(err);
    });
};

// crear las notas y renderiza una nueva pagina 
usuariosCtrl.ejecutarLogin = async (req, res, next) => {
    var requestBody = {
        "numeroDocumento": req.body.numDoc,
        "pwd": req.body.contrasena
    };

    rest.post(req, '/api/v1/auth/signin', requestBody)
        .then(result => {
            res.cookie('token', result.data.token, {
              maxAge: 60 * 60 * 1000, // 1 hour
              httpOnly: true,
              secure: true,
              sameSite: true,
              path: '/'
            });
            res.cookie('usuario', JSON.stringify(result.data.usuario), {
              maxAge: 60 * 60 * 1000, // 1 hour
              httpOnly: true,
              secure: true,
              sameSite: true,
              path: '/'
            });
            res.redirect('/Usuarios');
        })
        .catch(err => {
            console.log('Error de autenticacion: ', err);
            var errorMessage = 'Error de autenticación. El servicio no está disponible en este momento. Intente mas tarde.';
            if (err.response.status === 401) {
                errorMessage = 'Error de autenticación. Verifique los datos ingresados e intente nuevamente.';
            }
            res.render('Login', { message: { content : errorMessage } });
        });
};

// exportamos el modelo de las notas 
module.exports = usuariosCtrl;