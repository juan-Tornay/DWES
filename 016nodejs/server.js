const http = require('http');
const { Logger } = require('winston');

// Define el puerto en el que el servidor escuchará
const PORT = 3000;

// Crea el servidor y define la función que manejará las solicitudes


const palabra =  'que dise canijo'

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de estado de éxito
  res.setHeader('Content-Type', 'text/plain'); // Tipo de contenido
  res.end('Esto es el servidor del ejercicio1 de la practica 16'); 

 //res.end('ME gustan los botellines');

});

throw new Error('Server Error');


// Hace que el servidor escuche en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
