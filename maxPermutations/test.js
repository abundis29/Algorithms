const maxPermutations = require('./index')

it('Should be defined', () => {
    expect(maxPermutations).toBeDefined()
});

it('Should return all permutations of a string max string length can be 50', () => {
    expect(maxPermutations("abc")).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);

});

it('Should return all permutations of a string max string length can be 50', () => {
    expect(maxPermutations("ABC")).toEqual(['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
});

it('Should return all permutations of a string max string length can be 50 || BIGGER THAN 50', () => {
    expect(maxPermutations("ABCABCABCAABCABCABCAABCABCABCAABCABCABCAABCABCABCAF")).toEqual('not allowed');
})