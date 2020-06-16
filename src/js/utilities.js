var expressHbs = require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper("inc", function(value, options) {
    return parseInt(hbs.handlebars.escapeExpression(value)) + 1;
});

hbs.handlebars.registerHelper('verificarEstado', function(estado, tipo) {
    return estado && tipo && hbs.handlebars.escapeExpression(tipo).toLowerCase() === hbs.handlebars.escapeExpression(estado).toLowerCase();
});