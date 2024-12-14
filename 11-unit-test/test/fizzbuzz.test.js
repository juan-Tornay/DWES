const test = require('ava');
const fizzBuzz = require('../src/fizzbuzz');

test('Debe devolver "1"', t => {
  const result = fizzBuzz(1);
  t.is(result, '1');
});

test('Debe devolver "fizz"', t => {
  const result = fizzBuzz(3);
  t.is(result, 'fizz');
});

test('Debe devolver "buzz"', t => {
  const result = fizzBuzz(5);
  t.is(result, 'buzz');
});

test('Debe devolver "fizzbuzz"', t => {
  const result = fizzBuzz(15);
  t.is(result, 'fizzbuzz');
});