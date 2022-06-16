import { Stats } from './stats.js';

// Extend Stats class for number of lines cleared and current Level
export class LineStats extends Stats {
    constructor(htmlId) {
        super(htmlId);
    }

    update(adjustedBy, level, totalLinesCleared, fallInterval) {
        // Update the counter for line type stat by 1
        this.setStat(this.getStat() + adjustedBy);

        // Recalculate the level
        let calcLevel = 1 + Math.floor(totalLinesCleared.getStat() / 10);

        // If the level has changed, update new level stat and that fall rate
        if (calcLevel !== level.getStat()) {
            level.setStat(calcLevel);

            // Set the fall rate to the number of ms equal to the the initial value times 85% for each additional level beyond the first
            fallInterval.current = fallInterval.initial * Math.pow(0.85, (level.getStat() - 1));
        }
    }
}