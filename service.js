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
    var conn;
    var body = '';
    try {
        // connection DB 
        conn = await db.getConnection();
        request.on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            // parse
            body = JSON.parse(body);
            // new query
            var query = "insert into guestbook value (?, ?)";
            // execute the query
            conn.query(query, [body.name, body.comment]);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end("Tạo mới thành công");
        });
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
