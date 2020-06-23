const {
    validationResult
} = require('express-validator');

const errorValidation = {};

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