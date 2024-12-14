
const express = require('express');
const app = express();
const port = 3002;


    app.get('/', (req, res) => {
        res.send('Hola Gabri ,que pasa  😈');
    });

    app.listen(port, () => {
        console.log(`El servidor esta corriendo en el puerto http://localhost:${port}`);
    });