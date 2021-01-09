const findRepeatedChars = require('./index.js')

it('finRepeatedChar is Declared ', () => {
    expect(findRepeatedChars).toBeDefined()
});

it('should return an array of the characters that are repeated', () => {
    expect(findRepeatedChars('hellooooo', 'alieeeeeen')).toEqual(['o', 'e'])
});
it('should return an array of the characters that are repeated with numbers', () => {
    expect(findRepeatedChars('hello111', 'alieeeeeen2')).toEqual(['1', 'e'])
});