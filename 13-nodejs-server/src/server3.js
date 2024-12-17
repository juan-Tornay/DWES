const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let filePath = '';

  switch (req.url) {
    case '/':
      filePath = path.join(__dirname, 'index.html');
      break;
    case '/ejemplo1-server3':
      filePath = path.join(__dirname, 'ejemplo1-server3.html');
      break;
    case '/ejemplo2-server3':
      filePath = path.join(__dirname, 'ejemplo2-server3.html');
      break;
    default:
      filePath = path.join(__dirname, '404.html');
      res.statusCode = 404;
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error al cargar la página');
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en el puerto http://${hostname}:${port}/`);
});