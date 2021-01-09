const convertToDecimal = require('./index')

it('Should be Defined', () => {
    expect(convertToDecimal).toBeDefined();
});

it('Should convert string to base 2', () => {
    expect(convertToDecimal('1100', 2)).toEqual(12)
});

it('Should convert string to base 16', () => {
    expect(convertToDecimal('11A', 16)).toEqual(282)
});

it('Should convert string to base 8', () => {
    expect(convertToDecimal('123', 8)).toEqual(83)
});

it('Should convert string to base 2 WRONG TYPE', () => {
    expect(convertToDecimal(1100, 2)).toEqual(12)
});

it('Should convert string to base 16 WRONG TYPE', () => {
    expect(convertToDecimal('11A', '16')).toEqual(282)
});