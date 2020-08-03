var mariadb = require('mariadb');

console.log('Get connection mariadb...');

var connPool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    port: "3307",
    password: "123456Qui?",
    database: 'apidb'
});

module.exports = {
    getConnection: function () {
        return new Promise(function (resolve, reject) {
            connPool.getConnection().then(function (connection) {
                console.log('connection', connection);
                resolve(connection);
            }).catch(function (error) {
                console.log('error', error);
                reject(error);
            })
        });
    }
}
