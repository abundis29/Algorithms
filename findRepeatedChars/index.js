const findRepeatedChar = require('../findRepeatedChar/index')

function findRepeatedChars(a, b) {
    return [findRepeatedChar(a), findRepeatedChar(b)]
}
module.exports = findRepeatedChars;