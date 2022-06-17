import { generateShape } from '../tetroidSetup/generateShape.js';
import { canClearRow } from './canClearRow.js';
import { moveRowsDown } from './moveRowsDown.js';
import { updateScoreStats } from './updateScoreStats.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';
import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';

export const playGame = () => {
    // Starts the game on the first turn by generating a shape and displaying it
    if (shapes.generated == 0) {
        generateShape();
    } else {
        // Determine what shapeTemplate is being used and if it is valid to move the shape down one row
        let curTetroid = tetroid.templates[tetroid.curTemplateId];
        curTetroid.shiftBy = 10;
        let canShift = curTetroid.isPositionValid(curTetroid.curPosTiles);

        // If the shape isn't newly generated and it can be shifted, then update the position
        if(canShift) {
            curTetroid.moveTetroid('down');
        }
        // If the shape can NOT be shifted...
        else {
            let numRowsCleared = 0;

            // Check if the row is full, can be cleared, shifting the rows down
            curTetroid.curPosTiles.forEach(tilePos => {
                let rowNum = Math.floor(tilePos / grid.tilesWide);
                if (canClearRow(rowNum)) {
                    moveRowsDown(rowNum);
                    numRowsCleared += 1;
                }    
            })
            updateScoreStats(numRowsCleared); 
            generateShape();
        }
    }
}