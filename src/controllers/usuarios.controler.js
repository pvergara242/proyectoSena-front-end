const usuariosCtrl = {};
const axios = require("axios");

// crear las notas y renderiza una nueva pagina 
usuariosCtrl.crearUsuario = async (req, res) => {
    console.log('request: ', req);
    console.log('request body: ', req.body);

    var requestBody = {
        "tipoDeDocumento": req.body.tipoDoc,
        "numeroDocumento": req.body.numDoc,
        "fechaNacimiento": req.body.fechaNac,
        "genero": req.body.genero,
        "nombres": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefonoFijo": req.body.tel_fij,
        "celular": req.body.celular,
        "correo": req.body.direc,
        "contrasena": req.body.contraseña[0],
        "rol": req.body.rol
    }
    
    let headers = { 'Content-Type': 'application/json' };
    
    try {
        let fetchResponse = await axios.post('http://localhost:3000/api/v1/create/User', requestBody, headers);
        console.log('fetchResponse', fetchResponse);
    } catch (error) {
        console.log(error);
    }
    res.redirect('/usuarios/all');
};

usuariosCtrl.renderUsuarios = async(req, res) => {
    let usuarios = await axios.get('http://localhost:3000/api/v1/get/Users');
    let data = usuarios.data;
    console.log('data: ', data);
    res.render('usuarios/all-usuarios', { usuarios: data });
};

usuariosCtrl.renderEditarUsuarios = async(req, res) => {
    console.log('req: ', req);
    let usuario = await axios.get('http://localhost:3000/api/v1/get/User/' + req.params.id);
    let data = usuario.data;
    
    let date = new Date( Date.parse(data.fechaNacimiento) );
    let fechaNacimiento = date.toISOString().slice(0, 10);
    data.fechaNacimiento = fechaNacimiento;
    console.log('data get usuario: ', data);
    res.render('usuarios/edit-usuarios', { usuario: data });
};

usuariosCtrl.renderActualizarUsuario = async (req, res) => {
    console.log('request: ', req);
    console.log('request body: ', req.body);

    var requestBody = {
        "tipoDeDocumento": req.body.tipoDoc,
        "numeroDocumento": req.body.numDoc,
        "fechaNacimiento": req.body.fechaNac,
        "genero": req.body.genero,
        "nombres": req.body.nombre,
        "apellidos": req.body.apellidos,
        "telefonoFijo": req.body.tel_fij,
        "celular": req.body.celular,
        "correo": req.body.direc,
        "rol": req.body.rol
    }
    
    let headers = { 'Content-Type': 'application/json' };
    
    try {
        let fetchResponse = await axios.put('http://localhost:3000/api/v1/update/User/' + req.body.usuarioId, requestBody, headers);
        console.log('fetchResponse', fetchResponse);
    } catch (error) {
        console.log(error);
    }
    res.redirect('/usuarios/all');
};

// exportamos el modelo de las notas 
module.exports = usuariosCtrl;