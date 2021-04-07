const count = require('./index');

test('Add two numbers without using arithmetic operators toBeDefined', () => {
  expect(count).toBeDefined();
});


it('Should return the longest word, if two or more words has the same length return as an array, cant return duplicates', () => {
  expect(count("The quick brown fox jumped over jumped jumpex jumpex the lazy dog")).toEqual('jumped');
});

it('Should return the longest word, if two or more words has the same length return as an array, cant return duplicates', () => {
  expect(count("The quick brown fox jumped The over jumped jumpex jumpex the lazy dog")).toEqual('The');
});