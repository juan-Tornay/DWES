const express = require('express');
const app = express();
const puerto = 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor Express');
});

app.get('/header', (req, res) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      codigo: 401,
      error: 'No autorizado',
      mensaje: 'Error',
    });
  }
  res.send('Token recibido');
});

app.get('/params/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.send(`Hola ${nombre}`);
});

app.get('/query', (req, res) => {
  const { n } = req.query;
  const numero = parseInt(n, 10);

  if (!isNaN(numero) && numero > 0) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma += i;
    }
    res.send(`La suma de todos los números desde 1 hasta ${numero} es ${suma}`);
  } else {
    res.status(400).send('<h1>Solicitud Incorrecta</h1><p>Falta o es inválido el parámetro "n" en la consulta.</p>');
  }
});

app.post('/body', (req, res) => {
  const cuerpo = req.body;
  let resultado = '<h1>Parámetros del Cuerpo</h1><ul>';
  for (const clave in cuerpo) {
    if (cuerpo.hasOwnProperty(clave)) {
      resultado += `<li>${clave}: ${cuerpo[clave]}</li>`;
    }
  }
  resultado += '</ul>';
  res.send(resultado);
});

const animalesRouter = express.Router();

animalesRouter.get('/perro', (req, res) => {
  res.json({ sonido: 'guau guau' });
});

animalesRouter.get('/gato', (req, res) => {
  res.json({ sonido: 'miau' });
});

animalesRouter.get('/pajaro', (req, res) => {
  res.json({ sonido: 'pio pio' });
});

app.use('/animales', animalesRouter);

app.use((req, res) => {
  res.status(404).json({
    codigo: 404,
    error: 'No encontrado',
    mensaje: 'Error: Ruta no encontrada'
  });
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${puerto}/`);
});