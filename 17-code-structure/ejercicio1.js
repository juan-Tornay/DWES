
const express = require('express'); 
const app = express();
const port = 3001;


app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
});

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(port, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
    return;
  }
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
