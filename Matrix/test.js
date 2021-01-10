const Matrix = require('./index')

it('Should be defined ', () => {
        expect(Matrix).toBeDefined()
});

it('Should return a Matrix and if a element in matrix is 0, its entire column / row are set to 0', () => {
        const m = Matrix([
                [1, 2, 3],
                [4, 0, 6],
                [7, 8, 9]
        ]);
        expect(m.length).toEqual(3);
        expect(m[0]).toEqual([1, 0, 3]);
        expect(m[1]).toEqual([0, 0, 0]);
        expect(m[2]).toEqual([7, 0, 9]);
});

it('Should return a Matrix and if a element in matrix is 0, its entire column / row are set to 0, OTHER POSITION', () => {
        const m = Matrix([
                [1, 2, 3],
                [0, 5, 6],
                [7, 8, 9]
        ]);
        expect(m.length).toEqual(3);
        expect(m[0]).toEqual([0, 2, 3]);
        expect(m[1]).toEqual([0, 0, 0]);
        expect(m[2]).toEqual([0, 8, 9]);
});

it('Should return a Matrix and if a element in matrix is 0, its entire column / row are set to 0, OTHER BIGGER MATRIX', () => {
        const m = Matrix([
                [1, 2, 3, 1],
                [0, 5, 6, 1],
                [7, 8, 9, 1],
                [7, 8, 9, 1]
        ]);
        expect(m.length).toEqual(4);
        expect(m[0]).toEqual([0, 2, 3, 1]);
        expect(m[1]).toEqual([0, 0, 0, 0]);
        expect(m[2]).toEqual([0, 8, 9, 1]);
        expect(m[2]).toEqual([0, 8, 9, 1]);

});
it('Should return a Matrix and if a element in matrix is 0, its entire column / row are set to 0, OTHER BIGGER MATRIX && DOUBLE 0', () => {
        const m = Matrix([
                [1, 2, 3, 1],
                [0, 5, 0, 1],
                [7, 8, 9, 1],
                [7, 8, 9, 1]
        ]);
        expect(m.length).toEqual(4);
        expect(m[0]).toEqual([0, 2, 0, 1]);
        expect(m[1]).toEqual([0, 0, 0, 0]);
        expect(m[2]).toEqual([0, 8, 0, 1]);
        expect(m[3]).toEqual([0, 8, 0, 1]);

});
it(' OTHER BIGGER MATRIX && WHITOUT  0', () => {
        const m = Matrix([
                [1, 2, 3, 1],
                [4, 5, 6, 1],
                [7, 8, 9, 1],
                [7, 8, 9, 1]
        ]);
        expect(m.length).toEqual(4);
        expect(m[0]).toEqual([1, 2, 3, 1]);
        expect(m[1]).toEqual([4, 5, 6, 1]);
        expect(m[2]).toEqual([7, 8, 9, 1]);
});