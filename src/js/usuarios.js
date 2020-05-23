console.log('test hansel');
var expressHbs =  require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper('verificarRol', function(rol, tipo) {
    return rol == tipo;
  })
  
  hbs.handlebars.registerHelper('verificarGenero', function(genero, tipo) {
    return genero == tipo;
  })
  
  hbs.handlebars.registerHelper('verificarTipoDoc', function(tipoDoc, tipo) {
    return tipoDoc == tipo;
  })