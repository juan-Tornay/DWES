const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let filePath = '';

  switch (req.url) {
    case '/pagina':
      filePath = path.join(__dirname, 'pagina.html');
      res.statusCode = 200;
      break;
    case '/error':
      filePath = path.join(__dirname, 'error.html');
      res.statusCode = 404;
      break;
    default:
      res.statusCode = 404;
      filePath = path.join(__dirname, '404.html');
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