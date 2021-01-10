let maxPermutations = (string) => {
    let permutations = []
    if (string.length > 50) return 'not allowed';
    if (!string || typeof string !== "string") return;
    if (string.length < 2) return string;

    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        while (string.indexOf(char) != i) continue;
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        for (let permut of maxPermutations(remainingChars)) {
            permutations.push(char + permut)
        }
    }
    return permutations
}

module.exports = maxPermutations;