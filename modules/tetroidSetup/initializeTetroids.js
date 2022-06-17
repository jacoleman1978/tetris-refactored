import { Tetroid } from './tetroids.js';

// Instantiate all members of Tetroid class
const lineShape = new Tetroid(0, 'blue', [3, 4, 5, 6], [5, 15, 25, 35], [3, 4, 5, 6], [5, 15, 25, 35]);
const lShape = new Tetroid(1, 'green', [6, 14, 15, 16], [4, 14, 24, 25], [14, 15, 16, 24], [4, 5, 15, 25]);
const revLShape = new Tetroid(2, 'yellow', [14, 15, 16, 4], [4, 14, 24, 5], [14, 15, 16, 26], [5, 15, 24, 25])
const tShape = new Tetroid(3, 'orange', [14, 15, 16, 5], [5, 15, 25, 16], [14, 15, 16, 25], [5, 15, 25, 14]);
const sShape = new Tetroid(4, 'violet', [5, 6, 14, 15], [4, 14, 15, 25], [5, 6, 14, 15], [4, 14, 15, 25]);
const revSShape = new Tetroid(5, 'darksalmon', [4, 5, 15, 16], [5, 14, 15, 24], [4, 5, 15, 16], [5, 14, 15, 24]);
const squareShape = new Tetroid(6, 'greenyellow', [4, 5, 14, 15], [4, 5, 14, 15], [4, 5, 14, 15], [4, 5, 14, 15]);

export const tetroidSettings = {
    templates: [lineShape, lShape, revLShape, tShape, sShape, revSShape, squareShape],
    curTemplateId: 0,
    nextTemplateId: 0
}