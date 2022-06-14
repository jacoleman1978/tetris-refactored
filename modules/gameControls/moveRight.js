import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';

// Logic for arrow and button to move right
export const moveRight = () => {
    let isRightSide = false;
    let curTetroid = tetroid.templates[tetroid.curTemplateId];
    curTetroid.curPosTiles.forEach((tilePos) => {
        // Set a flag if the shape is already on the right side of the screen
        if ((tilePos) % grid.tilesWide == 9) {isRightSide = true;}
    })
    // If the shape is NOT on the right side of the screen, shift the shape one square right
    if (!isRightSide) {
        if (curTetroid.canMoveTetroid(1)) {
            tetroid.templates[tetroid.curTemplateId].updatePos();
        }   
    }
}