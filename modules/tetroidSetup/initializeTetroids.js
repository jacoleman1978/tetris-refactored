// Instantiate all members of Tetroid class
const lineShape = new Tetroid(0, 'blue', [0, 1, 2, 3], [2, 12, 22, 32], [0, 1, 2, 3], [2, 12, 22, 32]);
const lShape = new Tetroid(1, 'green', [3, 11, 12, 13], [1, 11, 21, 22], [11, 12, 13, 21], [1, 2, 12, 22]);
const revLShape = new Tetroid(2, 'yellow', [11, 12, 13, 1], [1, 11, 21, 2], [11, 12, 13, 23], [2, 12, 21, 22])
const tShape = new Tetroid(3, 'orange', [11, 12, 13, 2], [2, 12, 22, 13], [11, 12, 13, 22], [2, 12, 22, 11]);
const sShape = new Tetroid(4, 'violet', [2, 3, 11, 12], [1, 11, 12, 22], [2, 3, 11, 12], [1, 11, 12, 22]);
const revSShape = new Tetroid(5, 'darksalmon', [1, 2, 12, 13], [2, 11, 12, 21], [1, 2, 12, 13], [2, 11, 12, 21]);
const squareShape = new Tetroid(6, 'greenyellow', [1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12]);

export const tetroidTemplates = {
    line: lineShape,
    l: lShape,
    revL: revLShape,
    t: tShape,
    s: sShape,
    revS: revSShape,
    square: squareShape,
    array: [lineShape, lShape, revLShape, tShape, sShape, revSShape, squareShape]
}