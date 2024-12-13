const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        logFormat
    ),
    transports: [
        new transports.Console()
    ]
});

module.exports = logger;

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/logger'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 3001; // Cambia el puerto a 3001

// Configurar Morgan para usar el logger de Winston
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message.trim())
    }
}));

app.get('/', (req, res) => {
    res.status(500).send('Server Error');
});

app.get('/exercise', (req, res) => {
    res.status(200).send('Esto es el servidor del ejercicio 1 de la práctica 16');
});

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});