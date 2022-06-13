import { LineStats } from "./lineStats.js";

// Initialize all LineStat class objects
const oneLineCleared = new LineStats('one-line');
const twoLinesCleared = new LineStats('two-line');
const threeLinesCleared = new LineStats('three-line');
const fourLinesCleared = new LineStats('tetris');
const totalLinesCleared = new LineStats('total');
const level = new LineStats('level');

// Store all line related objects in lineArr
const lineArr = [oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared, level];

const levelIndex = lineArr.length - 1;

lineArr.forEach((item, index) => {
    if (index === levelIndex) {
        item.setStat(1);
    } else {
        item.setStat(0);
    }
});

const lineStatSettings = {
    oneLineCleared: oneLineCleared,
    twoLinesCleared: twoLinesCleared,
    threeLinesCleared: threeLinesCleared,
    fourLinesCleared: fourLinesCleared,
    totalLinesCleared: totalLinesCleared,
    level: level
}

export {lineStatSettings};