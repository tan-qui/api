const url = require('url');
const db = require('./db.js');

exports.guestBook = async function (request, response) {
    const reqUrl = url.parse(request.url, true);
    var result;
    var conn;
    try {
        // connection DB 
        conn = await db.getConnection();
        console.log('conn', conn);
        // new query
        var query = "select * from guestbook";
        // execute the query
        result = await conn.query(query);
        console.log('conn', JSON.stringify(result));
    } catch (error) {
        console.log('error', error);
        throw error;
    } finally {
        if (conn) return conn.release();
    }
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(result));
};
