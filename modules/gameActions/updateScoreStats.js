import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';
import { gameSettings as game} from '../gameAreaSetup/gameSettings.js';

// Updates the score and score stats based on the number of rows cleared in that drop of a shape
export const updateScoreStats = (numRowsCleared) => {
    score.current.update(numRowsCleared, lines.level, score.current, score.highest);
    lines.total.update(numRowsCleared, lines.level, lines.total, game.fallInterval);
    
    if (numRowsCleared == 1) {lines.one.update(1, lines.level, lines.total, game.fallInterval);}
    else if (numRowsCleared == 2) {lines.two.update(1, lines.level, lines.total, game.fallInterval);}
    else if (numRowsCleared == 3) {lines.three.update(1, lines.level, lines.total, game.fallInterval);}
    else if (numRowsCleared == 4) {lines.four.update(1, lines.level, lines.total, game.fallInterval);}
}