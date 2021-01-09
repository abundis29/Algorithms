function convertToDecimal(strNumber, intBase) {
    if (!strNumber || !intBase) return
    return parseInt(strNumber, intBase)
}
module.exports = convertToDecimal;