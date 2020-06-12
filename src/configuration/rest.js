const axios = require("axios");
const endpoints = require('./endpoints');
const rest = {};

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