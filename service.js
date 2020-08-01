const url = require('url');

exports.guestBook = function (request, response) {
    const reqUrl = url.parse(request.url, true);
    // 
    var result = {
        // Connection sql server, get list geust book
        name: 'Qui',
        coment: 'Đéo biết ghi gì'
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(result));
};
