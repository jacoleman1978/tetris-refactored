import { Stats } from './stats.js';

// Extends Stats class for current and highest score
// Score values will be displayed in the header of the page
export class Scores extends Stats {
    constructor(htmlId) {
        super(htmlId);
    }

    update(linesClearedThisMove, level, currentScore, highestScore) {
        // The score for lines cleared depends on the number of rows cleared that move, and the level
        // 1 line = 100 + 5 / level
        // 2 lines = 220 + 10 / level
        // 3 lines = 360 + 15 / level
        // 4 lines = 520 + 20 / level
        let highest = highestScore.getStat();
        
        let newScore = currentScore.getStat() + parseInt(100 * linesClearedThisMove * (1 + (linesClearedThisMove - 1) * 0.1 + 0.05 * level.getStat()));

        currentScore.setStat(newScore);

        if (newScore > highest) {
            highestScore.setStat(newScore);
            localStorage.setItem("highScore", newScore)
        }
    }
}