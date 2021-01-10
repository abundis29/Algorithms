const romanChart = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

function getRomanNumeral(num) {
    if (num === 0) return ''
    for (let i = 0; i < romanChart.length; i++) {
        if (num >= romanChart[i][0]) {
            return romanChart[i][1] + getRomanNumeral(num - romanChart[i][0]);
        }
    }
}



module.exports = getRomanNumeral;