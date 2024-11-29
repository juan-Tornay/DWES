const http = require('http');
const { Logger } = require('winston');

const PORT = 3000;





const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
 

  if (req.url === '/') {
 
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('server Error');
  } else {
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esto es el servidor del ejercicio 1 de la práctica 16');
  }
});





server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
