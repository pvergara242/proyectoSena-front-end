const auth = {};

auth.filter = (req, res, next) => {
	console.log("req.cookies: ", req.cookies);
	console.log("req.cookies['token']: ", req.cookies['token']);
	console.log("req.cookies['usuario']: ", req.cookies['usuario']);
    if (!req.cookies || !(req.cookies['token'] && req.cookies['usuario'])) {
    	res.clearCookie('token', { path:'/' });
		res.clearCookie('usuario', { path:'/' });
		console.log('Redirigiendo a Login porque no se hallaron cookies');
		return res.redirect('/Login');
	}
  	return next();
}

auth.secureEndpoints = (err, req, res, next) => {
	console.log('Secure working...');
    if (!err) {
        console.log(err);
    }

    if (err.response.status === 401) {
        return res.redirect('/Login');
    } else {
        return res.redirect('/Error');
    }
};

module.exports = auth;