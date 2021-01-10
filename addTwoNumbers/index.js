function addTwoNumbers(a, b) {
    return b ? addTwoNumbers(a ^ b, (a & b) << 1) : a;
}

module.exports = addTwoNumbers;