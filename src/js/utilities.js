//requerimos las dependencias 
    var expressHbs = require('express-handlebars');
    var hbs = expressHbs.create({});


    hbs.handlebars.registerHelper("inc", function(value, options) {
        return parseInt(hbs.handlebars.escapeExpression(value)) + 1;
    });

//verifica el estado si esta activo o inactivo
    hbs.handlebars.registerHelper('verificarEstado', function(estado, tipo) {
//retorna si esta activo o no 
        return estado && tipo && hbs.handlebars.escapeExpression(tipo).toLowerCase() === hbs.handlebars.escapeExpression(estado).toLowerCase();
    });