var expressHbs = require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper('verificarRol', function(rol, tipo) {
    return rol && tipo && hbs.handlebars.escapeExpression(rol).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
})

hbs.handlebars.registerHelper('verificarGenero', function(genero, tipo) {
    return genero && tipo && hbs.handlebars.escapeExpression(genero).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
})

hbs.handlebars.registerHelper('verificarTipoDoc', function(tipoDoc, tipo) {
    return tipoDoc && tipo && hbs.handlebars.escapeExpression(tipoDoc).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
})