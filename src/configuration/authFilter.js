const auth = {};

auth.filter = (req, res, next) => {
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