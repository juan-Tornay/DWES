const express = require('express');
const app = express();
const port = 3002;


app.use((req, res, next) => {
  req.user = { isAuthenticated: true, role: 'admin' };
  next();
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de seguridad.');
});


app.get('/public', (req, res) => {
  res.send('Acceso público permitido a invitados.');
});


app.get('/vip', (req, res) => {
  if (req.user && req.user.isAuthenticated) {
    res.send('Acceso permitido a usuarios registrados.');
  } else {
    res.status(401).send('Acceso denegado. Debe estar autenticado.');
  }
});


app.get('/admin', (req, res) => {
  if (req.user && req.user.isAuthenticated && req.user.role === 'admin') {
    res.send('Acceso permitido a administradores.');
  } else {
    res.status(403).send('Acceso denegado. Debe ser administrador.');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
