import { LineStats } from "./modules/lineStats.js";

//Keeps track of the starting and current fall rate of the shape (1 square in # of milliseconds)
const fallInterval = {         
    initial: 800,       
    current: 800
}

const level = new LineStats('level');
level.setStat(1);

const oneRowCleared = new LineStats('oneRow');
const totalRowsCleared = new LineStats('total');

oneRowCleared.update(1, level, totalRowsCleared, fallInterval)

totalRowsCleared.update(1, level, totalRowsCleared, fallInterval)