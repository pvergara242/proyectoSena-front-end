    const auth = {};
// filtro de autorizacion, filtra todas las peticiones para verificar si esta logueado o no 
    auth.filter = (req, res, next) => {
// si no esta logueado lo manda al login  y si esta logueado lo deja pasar 
        if (!req.cookies || !(req.cookies['token'] && req.cookies['usuario'])) {
            res.clearCookie('token', { path:'/' });
            res.clearCookie('usuario', { path:'/' });

            return res.redirect('/Login');
        }
        return next();
    }

    auth.secureEndpoints = (err, req, res, next) => {
        console.log('Secure working...');
        if (err) {
            console.log(err);
        }

        if (err.response.status === 401) {
            res.clearCookie('token', { path:'/' });
            res.clearCookie('usuario', { path:'/' });
            return res.redirect('/Login');
        } else {
            return res.redirect('/Error');
        }
    };

    module.exports = auth;