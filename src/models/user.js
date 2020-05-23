
// requerimos mongoose para la conexion de base de datos 
// requerimos bcrypts para encriptar la contraseña de casa usuario que se registre y se loguee

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

// modelo de datos para los usarios 
const UserShema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

UserShema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserShema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password)
}


//exportamos el esquema 
module.exports = model('User', UserShema);





