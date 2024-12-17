import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});