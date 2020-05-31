var expressHbs =  require('express-handlebars');

var hbs = expressHbs.create({});

hbs.handlebars.registerHelper('verificarRol', function(rol, tipo) {
    return rol.toLowerCase() == tipo.toLowerCase();
  })
  
  hbs.handlebars.registerHelper('verificarGenero', function(genero, tipo) {
    return genero.toLowerCase() == tipo.toLowerCase();
  })
  
  hbs.handlebars.registerHelper('verificarTipoDoc', function(tipoDoc, tipo) {
    return tipoDoc.toLowerCase() == tipo.toLowerCase();
  })
  
  hbs.handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});