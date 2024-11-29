
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('¡Hola, mundo!\n');
// });




// /*  server.listen(3000, '127.0.0.1', () => {
//     console.log("Servidor corriendo en http://127.0.0.1:3000");
// });  */


// server.listen(3001, 'localhost', () => {
//     console.log("Servidor corriendo en http://localhost:3001");
// });




import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.listen(PORT, () => {
    console.log('Server listen' + PORT);
});