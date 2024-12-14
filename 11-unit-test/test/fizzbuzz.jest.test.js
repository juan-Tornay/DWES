const fizzBuzz = require('../src/fizzbuzz');
const { test, expect } = require('@jest/globals');

test('Debe devolver "1"', () => {
  const result = fizzBuzz(1);
  expect(result).toBe('1');
});

test('Debe devolver "fizz"', () => {
  const result = fizzBuzz(3);
  expect(result).toBe('fizz');
});

test('Debe devolver "buzz"', () => {
  const result = fizzBuzz(5);
  expect(result).toBe('buzz');
});

test('Debe devolver "fizzbuzz"', () => {
  const result = fizzBuzz(15);
  expect(result).toBe('fizzbuzz');
});