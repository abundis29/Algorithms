const longestWord = require('./index')

it('Should be defined', () => {
    expect(longestWord).toBeDefined()
});

it('Should return the longes word, if two r more wores has the same length return as an array, cant return duplicates', () => {
    expect(longestWord("The quick brown fox jumped over jumped jumpex the lazy dog")).toEqual(['jumped', 'jumpex']);

});


it('Should return the longes word, if two r more wores has the same length return as an array, cant return duplicates, WHITHOUT DUPLICATES', () => {
    expect(longestWord("The quick brown fox jumped over the lazy dog")).toEqual('jumped');
});