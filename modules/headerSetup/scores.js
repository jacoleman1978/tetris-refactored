import { Stats } from './stats.js';
import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';

// Extends Stats class for current and highest score
// Score values will be displayed in the header of the page
export class Scores extends Stats {
    constructor(htmlId) {
        super(htmlId);
    }
    updateHighScoreDisplay(scoreArr, highestScore) {
        scoreArr[1].displaySelector.textContent = highestScore.stat;
    }
    setHighestScore(currentScore, highestScore) {
        let current = currentScore.getStat();
        let highest = highestScore.getStat();
        if (current > highest) {
            highestScore.setStat(current);
            highestScore.displaySelector.textContent = highest;
        }
    }
    update(linesClearedThisMove, level, currentScore, highestScore) {
        // The score for lines cleared depends on the number of rows cleared that move, and the level
        // 1 line = 100 + 5 / level
        // 2 lines = 220 + 10 / level
        // 3 lines = 360 + 15 / level
        // 4 lines = 520 + 20 / level
        this.stat += parseInt(100 * linesClearedThisMove * (1 + (linesClearedThisMove - 1) * 0.1 + 0.05 * level.getStat()));
        currentScore.setStat(this.stat);
        this.displaySelector.textContent = this.stat;
        this.setHighestScore(currentScore, highestScore);
    }
}