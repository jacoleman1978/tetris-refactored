import { Stats } from './stats.js';

// Extend Stats class for number of lines cleared and current Level
export class LineStats extends Stats {
    constructor(htmlId) {
        super(htmlId);
    }
    update(adjustedBy, level, totalLinesCleared, fallInterval) {
        this.setStat(this.getStat() + adjustedBy)

        // The level is equal to 1 plus every 10 lines that have been cleared
        level.setStat(1 + Math.floor(totalLinesCleared.stat / 10));
        level.displaySelector.textContent = level.stat;

        // Set the fall rate to the number of ms equal to the the initial value times 85% for each additional level beyond the first
        fallInterval.current = fallInterval.initial * Math.pow(0.85, (level.stat - 1));
    }
}