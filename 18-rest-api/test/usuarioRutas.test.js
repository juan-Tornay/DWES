const request = require('supertest');
const express = require('express');
const usuariosRutas = require('../rutas/usuariosRutas');

const app = express();
app.use(express.json());
app.use('/usuarios', usuariosRutas);

describe('Rutas de Usuarios', () => {
  it('debería listar todos los usuarios', async () => {
    const res = await request(app).get('/usuarios');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
  });

  it('debería obtener un usuario por ID', async () => {
    const res = await request(app).get('/usuarios/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nombre', 'Juan');
  });

  it('debería crear un nuevo usuario', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Pedro', email: 'pedro@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('nombre', 'Pedro');
  });

  it('debería actualizar un usuario', async () => {
    const res = await request(app)
      .patch('/usuarios/1')
      .send({ nombre: 'Juan Actualizado' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nombre', 'Juan Actualizado');
  });

  it('debería sobreescribir un usuario', async () => {
    const res = await request(app)
      .put('/usuarios/1')
      .send({ nombre: 'Juan Sobreescrito', email: 'juan.sobreescrito@example.com' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nombre', 'Juan Sobreescrito');
  });

  it('debería borrar un usuario', async () => {
    const res = await request(app).delete('/usuarios/1');
    expect(res.statusCode).toEqual(204);
  });
});