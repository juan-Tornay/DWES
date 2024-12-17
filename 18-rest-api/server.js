const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const usuariosRutas = require('./rutas/usuariosRutas');
const manejadorErrores = require('./middlewares/manejadorErrores');

const app = express();
const PUERTO = 3002;

// Configuración de Winston Logger
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

// Middleware para Morgan Logger
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.use(express.json());

// Rutas de usuarios
app.use('/usuarios', usuariosRutas);

// Middleware para manejar rutas no definidas
app.use((req, res) => {
  res.status(404).json({
    codigo: 404,
    error: 'No encontrado',
    mensaje: 'Error: Ruta no encontrada'
  });
});

// Middleware para el control de errores
app.use(manejadorErrores);

app.listen(PUERTO, () => {
  logger.info(`Servidor corriendo en el puerto ${PUERTO}`);
});