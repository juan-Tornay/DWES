const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3002;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });


app.use((req, res, next) => {
  res.setTimeout(120000, () => { // 2 minutos
    res.status(408).send('Request timed out');
  });
  next();
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de subida y descarga de archivos.');
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ message: 'Archivo subido exitosamente', file: req.file });
});


app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'files', filename);
  res.download(filepath, (err) => {
    if (err) {
      console.error('Error al descargar el archivo:', err);
      res.status(404).send('Archivo no encontrado');
    }
  });
});


if (!fs.existsSync('files')) {
  fs.mkdirSync('files');
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en  el puerto http://localhost:${PORT}`);
});