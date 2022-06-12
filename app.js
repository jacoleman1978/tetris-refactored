import {oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared, level, lineArr} from './modules/initializeLineStats.js';

import {currentScore, highestScore, scoreArr} from './modules/initializeScoreStats.js';

//Keeps track of the starting and current fall rate of the shape (1 square in # of milliseconds)
const fallInterval = {         
    initial: 800,       
    current: 800
}

