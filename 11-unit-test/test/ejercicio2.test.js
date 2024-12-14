const test = require('ava');
const compararFechas = require('../src/ejercicio2');

test('Debe devolver la fecha anterior y posterior cuando se reciben dos fechas', t => {
  const resultado = compararFechas('2023-01-01', '2023-12-31');
  t.deepEqual(resultado, {
    fechaInicio: '2023-01-01T00:00:00.000Z',
    fechaFin: '2023-12-31T00:00:00.000Z'
  });
});

test('Debe devolver la fecha anterior y posterior cuando la primera fecha es posterior', t => {
  const resultado = compararFechas('2023-12-31', '2023-01-01');
  t.deepEqual(resultado, {
    fechaInicio: '2023-01-01T00:00:00.000Z',
    fechaFin: '2023-12-31T00:00:00.000Z'
  });
});

test('Debe comparar la fecha recibida con la fecha actual cuando solo se recibe una fecha', t => {
  const ahora = new Date();
  const resultado = compararFechas('2023-01-01');
  t.deepEqual(resultado, {
    fechaInicio: '2023-01-01T00:00:00.000Z',
    fechaFin: ahora.toISOString()
  });
});