function replaceRowColumn(omatrix, M, N, x, y) {
    // REPLACE ALL ELEMENTS M X N

    for (let j = 0; j < N; j++) {
        if (omatrix[x][j] != 0) {
            omatrix[x][j] = -1
        }
    }
    for (let i = 0; i < M; i++) {
        if (omatrix[i][y] != 0) {
            omatrix[i][y] = -1
        }
    }

}

function convert(omatrix) {
    // MARK: M X N MATRIX
    let M = omatrix.length;
    let N = omatrix[0].length;

    //     Scan The Matrix and traverse
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (omatrix[i][j] == 0) {
                //     IF 0 Found on index (i, j)
                //  replace Row i and column j
                replaceRowColumn(omatrix, M, N, i, j)
            }
        }
    }
    //     scan agait and replace cells with -1 to 0
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (omatrix[i][j] == -1) {
                omatrix[i][j] = 0;
            }
        }
    }
}

function Matrix(omatrix) {
    convert(omatrix)
    return omatrix
}


module.exports = Matrix;