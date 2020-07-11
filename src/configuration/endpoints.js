
// configuracion de variables de entorno 
const endpoints = {};

endpoints.backendHost = process.env.BACKEND_HOST || 'https://paola34.herokuapp.com';

module.exports = endpoints;