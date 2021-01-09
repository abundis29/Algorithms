const findRepeatedChar = require('./index.js')

it('Should be Defined', () => {
        expect(findRepeatedChar).toBeDefined()
});

it('Should Return Repeated String as string', () => {
        expect(findRepeatedChar('a')).toEqual('a');
        expect(findRepeatedChar('abcdefghijklmnaaaaa')).toEqual('a');
});