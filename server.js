
const hostname = 'localhost';
const port = 8000;
// import * as controller from './controller.js'
// controller.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log(`Server http://${hostname}:${port}/`);
});