function addTwoNumbers(a, b) {
    // MARK: ES5
    //     if (b == 0) {
    //         return a
    //     } else {
    //         return addTwoNumbers(a ^ b, (a & b) << 1)
    //     }
    // MARK:ES6
    return b ? addTwoNumbers(a ^ b, (a & b) << 1) : a;
}

module.exports = addTwoNumbers;