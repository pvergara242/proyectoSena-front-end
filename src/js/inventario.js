var expressHbs = require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper('verificarProducto', function(inventario, idProducto) {
    return inventario && inventario.producto && hbs.handlebars.escapeExpression(inventario.producto) === hbs.handlebars.escapeExpression(idProducto);
})