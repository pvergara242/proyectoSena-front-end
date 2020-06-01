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

rest.get = (req, url) => {

	let options = {
        params:{},
        headers: { 'Content-Type': 'application/json' }
    }
    if (req.headers.authorization) {
        options.headers['Authorization'] = req.headers.authorization;
    }
    
    return axios.get(endpoints.backendHost + url, options);
}

module.exports = rest;