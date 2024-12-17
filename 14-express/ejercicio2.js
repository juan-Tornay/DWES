const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hola Gabri ,que pasa  😈');
});

app.get('/transformObjectToArray', (req, res) => {
    const obj = { a: 1, b: 2 };
    const result = Object.entries(obj);
    res.json(result); 
});

app.get('/transformObjectToKeyValueArrays', (req, res) => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const result = [keys, values];
    res.json(result); 
});

app.get('/invertKeyValue', (req, res) => {
    const obj = { "z": "q", "w": "f" };
    const invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }
    res.json(invertedObj); 
});

app.get('/getTopNote', (req, res) => {
    const student = { name: 'John', notes: [3, 5, 4] };
    const topNote = Math.max(...student.notes);
    const result = { name: student.name, topNote };
    res.json(result); 
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto http://localhost:${port}`);
});