const usuariosCtrl = {};
const rest = require('../configuration/rest');

// crear un nuevo usuari y renderiza una nueva pagina 
usuariosCtrl.crearUsuario = async(req, res, next) => {

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
        "clave": req.body.contrasena,
        "rol": req.body.rol
    }

    rest.post(req, '/api/v1/usuarios', requestBody)
        .then(result => {
            res.render('Usuarios', {
                modalCompleteMessage: 'Usuario creado exitosamente',
                modalCompleteHref: '/Usuarios'
            });
        })
        .catch(err => {
            console.log(err);

            var errorMessage = 'Error en la operación';

            res.render('Usuarios', {
                modalCompleteMessage: errorMessage,
                modalCompleteTitle: 'Error',
                usuario: req.body
            });
        });
};

usuariosCtrl.renderUsuarios = async(req, res, next) => {
    const params = {
        includeInactive: true
    };

    rest.get(req, '/api/v1/usuarios', params)
        .then(result => {
            let data = result.data;
            res.render('usuarios/all-usuarios', {
                usuarios: data
            });
        })
        .catch(err => {
            next(err);
        });
};

usuariosCtrl.renderEditarUsuarios = async(req, res, next) => {
    rest.get(req, '/api/v1/usuarios/' + req.params.id)
        .then(result => {
            let data = result.data;
            let date = new Date(Date.parse(data.datosPersonales.fechaNacimiento));
            let fechaNacimiento = date.toISOString().slice(0, 10);
            data.datosPersonales.fechaNacimiento = fechaNacimiento;
            res.render('usuarios/edit-usuarios', {
                usuario: data
            });
        })
        .catch(err => {
            console.log(err);

            var errorMessage = 'Error en la operación';

            res.render('usuarios/all-usuarios', {
                modalCompleteMessage: errorMessage,
                modalCompleteTitle: 'Error',
                modalCompleteHref: '/Usuarios/all'
            });
        });
};

usuariosCtrl.renderActualizarUsuario = async(req, res, next) => {
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
            console.log(err);

            var errorMessage = 'Error en la operación';

            let data = {
                _id: req.body.usuarioId,
                datosPersonales: {
                    tipoDocumento: req.body.tipoDocumento,
                    numeroDocumento: req.body.numDoc,
                    fechaNacimiento: req.body.fechaNac,
                    genero: req.body.genero,
                    nombres: req.body.nombre,
                    apellidos: req.body.apellidos,
                    telefonoFijo: req.body.tel_fij,
                    celular: req.body.celular,
                    direccion: req.body.direccion,
                    correo: req.body.direc
                },
                rol: req.body.rol
            };

            res.render('usuarios/edit-usuarios', {
                modalCompleteMessage: errorMessage,
                modalCompleteTitle: 'Error',
                usuario: data
            });
        });
};

usuariosCtrl.deshabilitarUsuario = async(req, res, next) => {
    rest.delete(req, '/api/v1/usuarios/' + req.body.id)
        .then(result => {
            res.status(204);
            res.send();
        })
        .catch(err => {
            next(err);
        });
};

usuariosCtrl.habilitarUsuario = async(req, res, next) => {
    rest.patch(req, '/api/v1/usuarios/' + req.body.id + '/activate')
        .then(result => {
            res.status(204);
            res.send();
        })
        .catch(err => {
            next(err);
        });
};

// exportamos el modelo de las notas 
module.exports = usuariosCtrl;