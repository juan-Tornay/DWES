const express = require('express');
const app = express();
const PORT = 3002;

const libros = [
    { id: 1, titulo: 'pocoyo', autor: 'Gabriel rodriguez' },
    { id: 2, titulo: 'Platero y yo', autor: 'Juan ramon jimenez' },
    { id: 3, titulo: 'Torrente', autor: 'pepito' },
    { id: 4, titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
    { id: 5, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
   
];

const videojuegos = [
    { id: 1, nombre: 'GTA V', desarrolladora: 'Rockstar Games', genero: 'mundo abierto' },
    { id: 2, nombre: 'Fifa 25', desarrolladora: 'EA Sports', genero: 'deportes' },
    { id: 3, nombre: 'Counter Strike Global Offensive', desarrolladora: 'Valve' },
    { id: 4, nombre: 'The Witcher 3', desarrolladora: 'CD Projekt', genero: 'RPG' },
    { id: 5, nombre: 'Minecraft', desarrolladora: 'Mojang', genero: 'sandbox' },
   
];


const paginate = (array, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return array.slice(start, end);
};


const sort = (array, sortBy, order) => {
    return array.sort((a, b) => {
        if (order === 'desc') {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        return a[sortBy] > b[sortBy] ? 1 : -1;
    });
};


const filter = (array, filterBy, filterValue) => {
    return array.filter(item => item[filterBy].toLowerCase().includes(filterValue.toLowerCase()));
};

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de libros y videojuegos.');
});

app.get('/libros', (req, res) => {
    let { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 2;
    order = order || 'asc';

    let result = libros;

    if (filterBy && filterValue) {
        result = filter(result, filterBy, filterValue);
    }

    if (sortBy) {
        result = sort(result, sortBy, order);
    }

    const paginatedResult = paginate(result, page, pageSize);

    res.json({
        page,
        pageSize,
        total: result.length,
        totalPages: Math.ceil(result.length / pageSize),
        data: paginatedResult
    });
});


app.get('/videojuegos', (req, res) => {
    let { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 2;
    order = order || 'asc';

    let result = videojuegos;

    if (filterBy && filterValue) {
        result = filter(result, filterBy, filterValue);
    }

    if (sortBy) {
        result = sort(result, sortBy, order);
    }

    const paginatedResult = paginate(result, page, pageSize);

    res.json({
        page,
        pageSize,
        total: result.length,
        totalPages: Math.ceil(result.length / pageSize),
        data: paginatedResult
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});