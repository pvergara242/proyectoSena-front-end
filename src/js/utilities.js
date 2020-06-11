var expressHbs = require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});

hbs.handlebars.registerHelper('verificarEstado', function(estado, tipo) {
    return estado && tipo.toLowerCase() === estado.toLowerCase();
});