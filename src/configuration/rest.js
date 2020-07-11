// requerimos dependencias 
    const axios = require("axios");
    const endpoints = require('./endpoints');
    const rest = {};

// filtro para metodo post que configuran la autorizacion para las peticiones (post HTTP)
    rest.post = (req, url, requestBody) => {

        let options = {
            params:{},
            headers: { 'Content-Type': 'application/json' }
        }
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        return axios.post(endpoints.backendHost + url, requestBody, options);
    }

 // filtro para metodo put que configuran la autorizacion para las peticiones (put HTTP)
    rest.put = (req, url, requestBody) => {
        let options = {
            params:{},
            headers: { 'Content-Type': 'application/json' }
        }
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        return axios.put(endpoints.backendHost + url, requestBody, options);
    }

// filtro para metodo get que configuran la autorizacion para las peticiones (get HTTP)
    rest.get = (req, url, params) => {

        let options = {
            headers: { 'Content-Type': 'application/json' },
            params: params
        };
        
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        return axios.get(endpoints.backendHost + url, options);
    }

// filtro para metodo delete que configuran la autorizacion para las peticiones (delete HTTP)
    rest.delete = (req, url, params) => {

        let options = {
            headers: { 'Content-Type': 'application/json' },
            params: params
        };
        
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        return axios.delete(endpoints.backendHost + url, options);
    }

 // filtro para metodo patch que configuran la autorizacion para las peticiones (patch HTTP)
    rest.patch = (req, url, requestBody) => {
        let options = {
            params:{},
            headers: { 'Content-Type': 'application/json' }
        }
        if (req.headers.authorization) {
            options.headers['Authorization'] = req.headers.authorization;
        }
        
        return axios.patch(endpoints.backendHost + url, requestBody, options);
    }

    module.exports = rest;