const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;

const originalMessage = 'I know your secret';
let encryptedToken;

console.log('Iniciando generación del token...');
bcrypt.hash(originalMessage, 10, (err, hash) => {
  if (err) {
    console.error('Error al generar el token:', err);
    return;
  }
  encryptedToken = hash;
  console.log('Token encriptado generado:', encryptedToken);
});

const validateTokenMiddleware = async (req, res, next) => {
  console.log('Validando token...');
  const token = req.header('Authorization');
  if (!token) {
    console.log('Token no proporcionado.');
    return res.status(401).send('Acceso denegado: Token no proporcionado');
  }

  try {
    const isValid = await bcrypt.compare(originalMessage, token);
    if (!isValid) {
      console.log('Token inválido.');
      return res.status(401).send('Acceso denegado: Token inválido');
    }
    console.log('Token válido.');
    next();
  } catch (err) {
    console.error('Error al validar el token:', err);
    return res.status(500).send('Error interno del servidor');
  }
};

app.get('/protected', validateTokenMiddleware, (req, res) => {
  console.log('Acceso concedido.');
  res.send('Acceso concedido: Bienvenido a la ruta protegida');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
    return;
  }
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
