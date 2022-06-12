import {oneLineCleared, twoLinesCleared, threeLinesCleared, fourLinesCleared, totalLinesCleared, level, lineArr} from './modules/initializeLineStats.js'

//Keeps track of the starting and current fall rate of the shape (1 square in # of milliseconds)
const fallInterval = {         
    initial: 800,       
    current: 800
}

twoLinesCleared.update(3, level, totalLinesCleared, fallInterval)
totalLinesCleared.setStat(totalLinesCleared.getStat() + 6);
threeLinesCleared.update(2, level, totalLinesCleared, fallInterval)
totalLinesCleared.setStat(totalLinesCleared.getStat() + 6);
fourLinesCleared.update(1, level, totalLinesCleared, fallInterval)
totalLinesCleared.setStat(totalLinesCleared.getStat() + 4)
