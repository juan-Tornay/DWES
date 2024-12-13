const express = require('express');
const app = express();
const PORT = 3001;


const libros = [
    { id: 1, titulo: 'pocoyo', autor: 'Gabriel rodriguez' },
    { id: 2, titulo: 'Platero y yo', autor: 'Juan ramon jimenez' },
    { id: 3, titulo: 'Torrente', autor: 'pepito' },
];

const videojuegos = [
    { id: 1, nombre: 'GTA V', desarrolladora: 'Rockstar Games', genero:'mundo abierto' },
    { id: 2, nombre: 'Fifa 25', desarrolladora: 'EA Sports', genero: 'deportes'},
    { id: 3, nombre: 'Counter Strike Global Ofensive', desarrolladora:'Valve'}



];

const paginar = (req, res, next) => {
    const { offset = 0, limit } = req.query;
    req.paginacion = {
        offset: parseInt(offset, 10),
        limit: limit ? parseInt(limit, 10) : null
    };
    next();
};

    const filtrarOrdenarPaginar = (items, filtros, sort, offset, limit) => {
    let filtrados = items;

    
    for (const [clave, valor] of Object.entries(filtros)) {
        if (valor) {
            filtrados = filtrados.filter(item => item[clave] && item[clave].toLowerCase().includes(valor.toLowerCase()));
        }
    }

    
    if (sort) {
        const claveOrden = sort.startsWith('-') ? sort.substring(1) : sort;
        const orden = sort.startsWith('-') ? -1 : 1;
        filtrados = filtrados.sort((a, b) => {
            if (a[claveOrden] < b[claveOrden]) return -1 * orden;
            if (a[claveOrden] > b[claveOrden]) return 1 * orden;
            return 0;
        });
    }

    // Paginado
    const paginados = limit ? filtrados.slice(offset, offset + limit) : filtrados;

    return {
        total: filtrados.length,
        offset,
        limit: limit || filtrados.length,
        resultados: paginados
    };
};

app.get('/libros', paginar, (req, res) => {
    const { titulo, autor, sort } = req.query;
    const filtros = { titulo, autor };
    const { offset, limit } = req.paginacion;
    const resultado = filtrarOrdenarPaginar(libros, filtros, sort, offset, limit);
    res.json(resultado);
});

app.get('/videojuegos', paginar, (req, res) => {
    const { nombre, desarrolladora, sort } = req.query;
    const filtros = { nombre, desarrolladora };
    const { offset, limit } = req.paginacion;
    const resultado = filtrarOrdenarPaginar(videojuegos, filtros, sort, offset, limit);
    res.json(resultado);
});

app.listen(PORT, () => {
    console.log(`Servidor está corriendo en el puerto ${PORT}`);
});