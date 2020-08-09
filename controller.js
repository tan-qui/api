const http = require('http');
const url = require('url');


module.exports = http.createServer((request, response) => {
    var service = require('./service.js');
    //URL
    const requestUrl = url.parse(request.url, true);
    // index
    if (requestUrl.pathname == '/' && request.method == 'GET') {
        service.index(request, response)
    }
    // create GET
    if (requestUrl.pathname == '/create' && request.method == 'GET') {
        service.createGET(request, response)
    }
    // create GET
    if (requestUrl.pathname == '/create' && request.method == 'POST') {
        service.createPOST(request, response)
    }
    // update
    if (requestUrl.pathname == '/update' && request.method == 'GET') {
        service.updateGET(request, response)
    }
    if (requestUrl.pathname == '/update' && request.method == 'POST') {
        service.updatePOST(request, response)
    }
    // delete
    // if (requestUrl.pathname == '/delete/id' && request.method == 'DELETE') {
    //     service.create(request, response)
    // }
    // list guest book 
    else if (requestUrl.pathname == '/guest-book' && request.method == 'GET') {
        service.guestBook(request, response)
    }
});

