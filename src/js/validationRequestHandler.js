// requerimos las dependencias para validar los campos requeridos de cada formulario
    const {
        validationResult
    } = require('express-validator');



    const errorValidation = {};

// funcion que valida los campos de la peticion
    errorValidation.validateRequest = (req) => {
        var result = null;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            result = {};
            for (const item of errors.array()) {
                if (!result[item.param]) {
                    result[item.param] = [];
                    result[item.param].push(item.msg);
                }
            }
        }

        return result;
    }

    module.exports = errorValidation;