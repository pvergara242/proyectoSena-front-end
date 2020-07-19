
// configuracion de variables de entorno 
const endpoints = {};


// esta seria la url del backend en donde el fronten llama al backend para poder hacer las funciones que tendremos en el proyecto 
endpoints.backendHost = process.env.BACKEND_HOST || 'https://paola34.herokuapp.com';

module.exports = endpoints;