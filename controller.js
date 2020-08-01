const http = require('http');
const url = require('url');


module.exports = http.createServer((request, response) => {
    var service = require('./service.js');
    //URL
    const requestUrl = url.parse(request.url, true);
    // list geust book 
    if (requestUrl.pathname == '/guest-book' && request.method == 'GET') {
        service.guestBook(request, response)
    }
});