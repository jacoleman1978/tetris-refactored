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
        let curTetroid = tetroid.templates[tetroid.curTemplateId];
        curTetroid.updatePos();
    }
    // After the first shape of the game is generated do the following
    else {
        // Determine what shapeTemplate is being used and determine if is is valid to move the shape down one row
        let curTetroid = tetroid.templates[tetroid.curTemplateId];
        let canShift = curTetroid.canMoveTetroid(10);

        // If the shape isn't newly generated and it can be shifted, then update the position
        if(canShift) {
            curTetroid.curPosTiles = curTetroid.nextPosTiles.slice();
            curTetroid.updatePos();
        }
        // If the shape can NOT be shifted...
        else {
            let numRowsCleared = 0;
            // Set the shape that is in its final position to be gray
            curTetroid.curPosTiles.forEach(tilePos => {
                grid.tileArr[tilePos].style.backgroundColor = 'gray';
            })

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