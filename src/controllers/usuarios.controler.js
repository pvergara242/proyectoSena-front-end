// requiero las dependencias 
    const usuariosCtrl = {};
    const rest = require('../configuration/rest');
    const validationRequestHandler = require('../js/validationRequestHandler');
    const {
        body
    } = require('express-validator');

// crear un nuevo usuario y renderiza una nueva pagina 
    usuariosCtrl.crearUsuario = async(req, res, next) => {

        const errors = validationRequestHandler.validateRequest(req);

// validacion de los usuarios creados para enviar a la interfaz de la lista de usuarios
        if (errors && errors !== null) {
            return res.render('Usuarios', {
                usuario: req.body,
                errors: errors
            });
        }

// datos que se envian a la interfaz 
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

// crea los datos del usuarios
        rest.post(req, '/api/v1/usuarios', requestBody)
            .then(result => {
                res.render('Usuarios', {
                    modalCompleteMessage: 'Usuario creado exitosamente',
                    modalCompleteHref: '/Usuarios'
                });
            })
            .catch(err => {
                console.log(err);

                var errorMessage;
                if (err.response && err.response.status && err.response.status === 400) {
                    errorMessage = 'Parámetros inválidos';
                } else if (err.response && err.response.status && err.response.status === 401) {
                    return next(err);
                } else {
                    errorMessage = 'Error en la operación';
                }

                res.render('Usuarios', {
                    modalCompleteMessage: errorMessage,
                    modalCompleteTitle: 'Error',
                    usuario: req.body
                });
            });
    };

// muestra la lista de los usuarios
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

// funcion para editar los usuarios
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

                var errorMessage;
                if (err.response && err.response.status && err.response.status === 401) {
                    return next(err);
                } else {
                    errorMessage = 'Error en la operación';
                }

                res.render('usuarios/all-usuarios', {
                    modalCompleteMessage: errorMessage,
                    modalCompleteTitle: 'Error',
                    modalCompleteHref: '/Usuarios/all'
                });
            });
    };

// funcion para mostrar datos del usuario
usuariosCtrl.renderConsultarUsuario = async(req, res, next) => {
    rest.get(req, '/api/v1/usuarios/' + req.params.id)
        .then(result => {
            let data = result.data;
            let date = new Date(Date.parse(data.datosPersonales.fechaNacimiento));
            let fechaNacimiento = date.toISOString().slice(0, 10);
            data.datosPersonales.fechaNacimiento = fechaNacimiento;
            res.render('usuarios/details-usuarios', {
                usuario: data
            });
        })
        .catch(err => {
            console.log(err);

            var errorMessage;
            if (err.response && err.response.status && err.response.status === 401) {
                return next(err);
            } else {
                errorMessage = 'Error en la operación';
            }

            res.render('usuarios/all-usuarios', {
                modalCompleteMessage: errorMessage,
                modalCompleteTitle: 'Error',
                modalCompleteHref: '/Usuarios/all'
            });
        });
};

// actualiza los datos de usuarios 
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

                var errorMessage;
                if (err.response && err.response.status && err.response.status === 400) {
                    errorMessage = 'Parámetros inválidos';
                } else if (err.response && err.response.status && err.response.status === 401) {
                    return next(err);
                } else {
                    errorMessage = 'Error en la operación';
                }

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

// deshabilita los datos del usuario
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

// habilita los datos del usuario
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

    usuariosCtrl.validate = (method) => {
        switch (method) {
            case 'crearUsuario':
                {
                    return [
                        body('tipoDocumento', 'Debe ingresar el tipo de documento').exists().notEmpty(),
                        body('numDoc', 'Debe ingresar el numero de documento').exists().notEmpty(),
                        body('fechaNac', 'Debe ingresar la fecha de nacimiento').exists().notEmpty(),
                        body('genero', 'Debe elegir el genero').exists().notEmpty(),
                        body('nombre', 'Debe ingresar el(los) nombre(s)').exists().notEmpty(),
                        body('apellidos', 'Debe ingresar el(los) apellido(s)').exists().notEmpty(),
                        body('tel_fij', 'Debe ingresar el telefono fijo').exists().notEmpty(),
                        body('tel_fij', 'El telefono fijo debe ser un número').exists().isNumeric(),
                        body('celular', 'Debe ingresar el celular').exists().notEmpty(),
                        body('direccion', 'Debe ingresar la dirección').exists().notEmpty(),
                        body('direc', 'Debe ingresar el correo').exists().notEmpty(),
                        body('direc', 'Correo inválido').exists().isEmail(),
                        body('contrasena', 'Debe ingresar la contraseña').exists().notEmpty(),
                        body('confirmarContrasena', 'Debe ingresar la confirmación de contraseña').exists().notEmpty(),
                        body('rol', 'Debe elegir el rol').exists().notEmpty(),
                        body('contrasena').custom((value, {
                            req
                        }) => {
                            if (value !== req.body.confirmarContrasena) {
                                throw new Error('Confirmación de contraseña no coincide con contraseña');
                            }
                            return true;
                        }),
                        body('confirmarContrasena').custom((value, {
                            req
                        }) => {
                            if (value !== req.body.contrasena) {
                                throw new Error('Confirmación de contraseña no coincide con contraseña');
                            }
                            return true;
                        })
                    ]
                }
        }
    }

// exportamos el modelo de las notas 
    module.exports = usuariosCtrl;