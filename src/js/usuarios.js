// requerimos las dependencias

    var expressHbs = require('express-handlebars');

// crea el usuario 
    var hbs = expressHbs.create({});

// verifica el rol si es administrador o auxiliar
    hbs.handlebars.registerHelper('verificarRol', function(rol, tipo) {
        // retorna el rol y el valor que se le indico 
        return rol && tipo && hbs.handlebars.escapeExpression(rol).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
    })

// verifica el genero 
    hbs.handlebars.registerHelper('verificarGenero', function(genero, tipo) {
        // retorna el genero y el valor que se indico 
        return genero && tipo && hbs.handlebars.escapeExpression(genero).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
    })

// verifica el  tipo de documento 
    hbs.handlebars.registerHelper('verificarTipoDoc', function(tipoDoc, tipo) {
        // retorna un valor en este caso tipoDoc 
        return tipoDoc && tipo && hbs.handlebars.escapeExpression(tipoDoc).toLowerCase() == hbs.handlebars.escapeExpression(tipo).toLowerCase();
    })