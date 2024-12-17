const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const queryObject = url.parse(req.url, true).query;
  const number = parseInt(queryObject.number, 10);

  if (!isNaN(number) && number > 0) {
    res.statusCode = 200;
    let result = '<h1>FizzBuzz Sequence</h1><ul>';
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += '<li>FizzBuzz</li>';
      } else if (i % 3 === 0) {
        result += '<li>Fizz</li>';
      } else if (i % 5 === 0) {
        result += '<li>Buzz</li>';
      } else {
        result += `<li>${i}</li>`;
      }
    }
    result += '</ul>';
    res.end(result);
  } else {
    res.statusCode = 400;
    res.end('<h1>Bad Request</h1><p>Missing or invalid "number" query parameter.</p>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en el puerto http://${hostname}:${port}/`);
});