import { LineStats } from "./lineStats.js";

// Initialize all LineStat class objects
const oneLineCleared = new LineStats('one-line');
const twoLinesCleared = new LineStats('two-line');
const threeLinesCleared = new LineStats('three-line');
const fourLinesCleared = new LineStats('tetris');
const totalLinesCleared = new LineStats('total');
const level = new LineStats('level');

// Store all line related objects in lineArr
const lineArr = [oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared];

lineArr.forEach((item) => {
    item.setStat(0);
});

level.setStat(1);

const lineStatSettings = {
    one: oneLineCleared,
    two: twoLinesCleared,
    three: threeLinesCleared,
    four: fourLinesCleared,
    total: totalLinesCleared,
    array: lineArr,
    level: level
}

export {lineStatSettings};