import { LineStats } from "./lineStats.js";

// Initialize all LineStat class objects
const oneLineCleared = new LineStats('oneRow');
const twoLinesCleared = new LineStats('twoRow');
const threeLinesCleared = new LineStats('threeRow');
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

export {oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared, level, lineArr};