const mongoose = require('mongoose');
const mongoodb_uri = process.env.mongoodb_uri;

// validacion para la conexion a la base de datos 
mongoose.connect(mongoodb_uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error en la conexion db'));