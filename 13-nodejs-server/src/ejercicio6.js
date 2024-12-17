const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  
  
            res.setHeader('Content-Type', 'text/html');

        const queryObject = url.parse(req.url, true).query;
        const name = queryObject.name;

        if (name) {
            res.statusCode = 200;
            res.end(`<h1>Holaaaaaaa ${name}!</h1>`);
        } else {
            res.statusCode = 400;
            res.end('<h1>Bad Request</h1><p>Missing "name" query parameter.</p>');
        }
        });

        server.listen(port, hostname, () => {
        console.log(`Servidor corriendo en el puerto http://${hostname}:${port}/`);
        });