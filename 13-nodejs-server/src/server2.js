const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error al cargar la página');
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en el puerto  http://${hostname}:${port}/`);
});