function longestWord(str) {
    // Make array of splited words // get the longest word
    let splited = str.split(' ');
    splited = removeDuplicates(splited).sort((a, b) => b.length - a.length)
    // Create a char map to track max positions
    const charMap = splited.map((item, index) => [index, item.length]);
    const longestOrArray = getArrayOrLongest(charMap)
    const result = getIndexOfArray(longestOrArray, splited)
    return result
}

function getIndexOfArray(arr, splited) {
    // Finally Get Results
    let finalArray = []
    if (arr.length == 1) {
        return splited[arr[0]]
    }
    arr.forEach(element => {
        finalArray.push(splited[element])
    });
    return finalArray;
}

function getArrayOrLongest(arr) {
    // Get The Longest, an return indexes with hash map.
    let arrayOfMax = []
    let arrayOfMaxNoIndex = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        arrayOfMax.push(element[1])
    }
    const maxLengthinArr = Math.max(...arrayOfMax);

    for (let i = 0; i < arrayOfMax.length; i++) {
        const element = arrayOfMax[i];
        if (element === maxLengthinArr) {
            arrayOfMaxNoIndex.push(Math.max(i))
        }
    }

    return arrayOfMaxNoIndex;
}

function removeDuplicates(arry) {
    const unique = arry.filter(function(word, i, all) {
        return i == all.indexOf(word);
    })
    return unique;
}
module.exports = longestWord;