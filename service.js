const url = require('url');
const db = require('./db.js');
var fs = require('fs');

exports.index = async function (request, response) {
    fs.readFile("index.html", function (error, pagRespone) {
        if (error) {
            console.log('error', error);
            response.writeHead(404);
            response.write('Page Not Found!');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(pagRespone);
        }
        response.end();
    });
};

exports.create = async function (request, response) {
    //URL
    const requestUrl = url.parse(request.url, true);
    // Param
    console.log('body', body);
    console.log('request', request.body);
    // Param
    console.log('requestUrl', requestUrl);
    var param = requestUrl.query;

    var conn;
    try {
        // // connection DB 
        // conn = await db.getConnection();
        // // new query
        // var query = "insert into guestbook value (?, ?)";
        // // execute the query
        // conn.query(query, [param.name, param.comment]);
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.end("Tạo thành công!");
    } catch (error) {
        console.log('error', error);
        throw error;
    } finally {
        if (conn) return conn.release();
    }
};

exports.guestBook = async function (request, response) {
    var result;
    var conn;
    try {
        // connection DB 
        conn = await db.getConnection();
        console.log('conn1', conn);
        // new query
        var query = "select * from guestbook";
        // execute the query
        result = await conn.query(query);
        console.log('conn2', JSON.stringify(result));
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    } catch (error) {
        console.log('error', error);
        throw error;
    } finally {
        if (conn) return conn.release();
    }
};
