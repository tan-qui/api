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
    // create
    if (requestUrl.pathname == '/create' && request.method == 'POST') {
        service.create(request, response)
    }
    // update
    // if (requestUrl.pathname == '/update' && request.method == 'GET') {
    //     service.create(request, response)
    // }
    // delete
    // if (requestUrl.pathname == '/delete/id' && request.method == 'DELETE') {
    //     service.create(request, response)
    // }
    // list guest book 
    else if (requestUrl.pathname == '/guest-book' && request.method == 'GET') {
        service.guestBook(request, response)
    }
    // else {
    //     response.writeHead(404);
    //     response.write('Page Not Found!');
    // }
});

