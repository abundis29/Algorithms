const addTwoNumbers = require('./index');

test('Add two numbers without using arithmetic operators toBeDefined', () => {
  expect(addTwoNumbers).toBeDefined();
});

test('addTwoNumbers handles 0 as an input', () => {
  expect(addTwoNumbers(0, 0)).toEqual(0);
});

test('ReverseInt Add two numbers without using arithmetic operators', () => {
  expect(addTwoNumbers(5, 20)).toEqual(25);
  expect(addTwoNumbers(5, 200)).toEqual(205);
  expect(addTwoNumbers(555555, 666666)).toEqual(1222221);
});

test('ReverseInt flips a negative number', () => {
  expect(addTwoNumbers(-5, 0)).toEqual(-5);
  expect(addTwoNumbers(-15, 10)).toEqual(-5);
});
