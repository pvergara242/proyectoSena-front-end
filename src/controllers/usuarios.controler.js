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
    res.send('Usuarios');
};

// exportamos el modelo de las notas 
module.exports = usuariosCtrl;