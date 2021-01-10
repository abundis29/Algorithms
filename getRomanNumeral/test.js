const getRomanNumeral = require('./index')

it('Should be defined', () => {
    expect(getRomanNumeral).toBeDefined()
});

it('Should return Roman Numeral as String', () => {
    expect(getRomanNumeral(512).length).toEqual(4);
    expect(getRomanNumeral(512)).toEqual('DXII');

});


it('Should return Roman Numeral as String', () => {
    expect(getRomanNumeral(1512).length).toEqual(5);
    expect(getRomanNumeral(1512)).toEqual('MDXII');

});


it('Should return Roman Numeral as String', () => {
    expect(getRomanNumeral(3999).length).toEqual(9);
    expect(getRomanNumeral(3999)).toEqual('MMMCMXCIX');

});