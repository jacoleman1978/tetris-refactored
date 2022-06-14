import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';

// Updates the score and score stats based on the number of rows cleared in that drop of a shape
export const updateScoreStats = (numRowsCleared) => {
    score.current.update(numRowsCleared);
    lines.total.update(numRowsCleared);
    
    if (numRowsCleared == 1) {lines.one.update(1);}
    else if (numRowsCleared == 2) {lines.two.update(1);}
    else if (numRowsCleared == 3) {lines.three.update(1);}
    else if (numRowsCleared == 4) {lines.four.update(1);}
}