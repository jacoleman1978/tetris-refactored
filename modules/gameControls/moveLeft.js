import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';

// Logic for arrow and button to move left
export const moveLeft = () => {
    let isLeftSide = false;
    let curTetroid = tetroid.array[tetroid.curTemplateId];
    curTetroid.curPosTiles.forEach((tilePos) => {
        // Set a flag if the shape is already on the left side of the screen
        if ((tilePos) % grid.tilesWide == 0) {isLeftSide = true;}
    })
    // If the shape is NOT on the left side of the screen, shift the shape one square left
    if (!isLeftSide) {
        if (curTetroid.canMoveTetroid(-1)) {
            tetroid.array[tetroid.curTemplateId].updatePos();
        }   
    }
}