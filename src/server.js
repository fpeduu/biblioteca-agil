const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../database/db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = 3001; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);