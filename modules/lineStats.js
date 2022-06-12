import { Stats } from "./stats.js";

// Extend Stats class for number of lines cleared and current Level
class LineStats extends Stats {
    constructor(htmlId) {
        super(htmlId);
    }
    update(adjustedBy, level, totalRowsCleared, fallInterval) {
        this.stat += adjustedBy;
        this.displaySelector.textContent = this.stat;
        // The level is equal to 1 plus every 10 rows that have been cleared
        level.stat = 1 + Math.floor(totalRowsCleared.stat / 10);
        level.displaySelector.textContent = level.stat;
        // Set the fall rate to the number of ms equal to the the initial value times 85% for each additional level beyond the first
        fallInterval.current = fallInterval.initial * Math.pow(0.85, (level.stat - 1));
    }
}

export {LineStats};