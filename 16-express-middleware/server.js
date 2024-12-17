const express = require('express');
const http = require('http');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
const PORT = 3002;


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console()
  ]
});


app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));


app.use('/restricted', (req, res, next) => {
  const password = req.headers['password'];
  if (password === 'patata') {
    res.status(200).send('Bienvenid@, disfrute del contenido');
  } else {
    res.status(401).json({
      codigo: 401,
      error: 'Acceso restringido',
      mensaje: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
    });
  }
});


    app.get('/', (req, res) => {
      res.status(200).send('Bienvenido al servidor del ejercicio 1 de la práctica 16');
    });

    app.use((req, res) => {
      res.status(404).json({
        codigo: 404,
        error: 'No encontrado',
        mensaje: 'Error: Ruta no encontrada'
      });
    });

    app.use((err, req, res, next) => {
      logger.error(err.message);
      res.status(500).send('Server Error');
    });


    const server = http.createServer(app);

    server.listen(PORT, () => {
      logger.info(`Servidor corriendo en el puerto ${PORT}`);
    });
