const http = require('http');
const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/logger'); // Ruta correcta al logger

const app = express();
const PORT = 3001; // Cambia el puerto a 3001

// Configurar Morgan para usar el logger de Winston
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message.trim())
    }
}));

// Ruta principal
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the server!');
});

// Ruta /exercise
app.get('/exercise', (req, res) => {
    res.status(200).send('Esto es el servidor del ejercicio 1 de la práctica 16');
});

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});