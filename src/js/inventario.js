    var expressHbs = require('express-handlebars');

// crea el producto
    var hbs = expressHbs.create({});

// verifica el producto que se ha creado 
    hbs.handlebars.registerHelper('verificarProducto', function(inventario, idProducto) {
// retorna el producto en el inventario
        return inventario && inventario.producto && hbs.handlebars.escapeExpression(inventario.producto) === hbs.handlebars.escapeExpression(idProducto);
    })