import {oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared, level, lineArr} from './modules/initializeLineStats.js';

import {currentScore, highestScore, scoreArr} from './modules/initializeScoreStats.js';

import {lineShapeStats, lShapeStats, revLShapeStats, tShapeStats, sShapeStats, revSShapeStats, squareShapeStats, shapeStatArr} from './modules/initializeShapeStats.js';

//Keeps track of the starting and current fall rate of the shape (1 square in # of milliseconds)
const fallInterval = {         
    initial: 800,       
    current: 800
}

