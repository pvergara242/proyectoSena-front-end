    const authCtrl = {};
    const rest = require('../configuration/rest');

//crear las notas y renderiza una nueva pagina 
    authCtrl.ejecutarLogin = async (req, res, next) => {
        var requestBody = {
            "numeroDocumento": req.body.numDoc,
            "pwd": req.body.contrasena
        };
//inicia sesion 
        rest.post(req, '/api/v1/auth/signin', requestBody)
            .then(result => {
                res.cookie('token', result.data.token, {
                maxAge: 60 * 60 * 1000, // 1 hour
                httpOnly: true,
//secure: true, //TODO Habilitar para HTTPS
                sameSite: true,
                path: '/'
                });
// la sesion se mantendra abierta por minimo 1 hora activo 
                res.cookie('usuario', JSON.stringify(result.data.usuario), {
                maxAge: 60 * 60 * 1000, // 1 hour
                httpOnly: true,
//secure: true, //TODO Habilitar para HTTPS
                sameSite: true,
                path: '/'
                });
// si los usuarios ingresan bien los dato valida y los renderiza a la pagina de usuarios 
                console.log('Login completado...');
                res.redirect('/Usuarios');
            })
//de lo contrario tiene que verificar su usuarios y contraseña para volver a ingresar 
            .catch(err => {
                console.log('Error de autenticacion: ', err);
                var errorMessage = 'Error de autenticación. El servicio no está disponible en este momento. Intente mas tarde.';
                if (err.response.status === 401) {
                    errorMessage = 'Error de autenticación. Verifique los datos ingresados e intente nuevamente.';
                }
                res.render('Login', { message: { content : errorMessage } });
            });
    };

//exportamos el modelo
    module.exports = authCtrl;