import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';

// Logic for rotation of tetroid
// direction = "CW" for clockwise rotation
// direction = "CCW" for counter-clockwise rotation
export const rotate = (direction) => {
    let canShift = true;
    let isLeftSide = false;
    let isRightSide = false;
    let isOffBottom = false;
    let isNextTileOccupied = false;
    let curTetroid = tetroid.array[tetroid.curTemplateId];
    let nextRot = curTetroid.nextRotation(direction);

    nextRot.forEach((tilePos) => {
        // Check if one of the new tiles is on the right side of the screen
        if ((tilePos) % grid.tilesWide == 9) {isRightSide = true;}
        // Check if one of the new tiles is on the left side of the screen
        else if ((tilePos) % grid.tilesWide == 0) {isLeftSide = true;}
        
        // Check if one of the new tiles would be off the bottom of the screen
        if ((tilePos) >= (grid.tilesWide * grid.tilesHigh)) {isOffBottom = true;}

        // Check if the next tile is occupied by checking the color
        if (isOffBottom == false) {
            if (grid.tileArr[tilePos].style.backgroundColor == 'gray') {
                isNextTileOccupied = true;
            }
        }

        // Check for shape looping from one side to the other OR if the next tile is occupied
        //      OR if the tile would go off the screen on the bottom
        // If true, then the shape can't rotate
        if ((isLeftSide && isRightSide) || isNextTileOccupied || isOffBottom) {
            canShift = false;
        }
    })
    
    // If the flag is true, then the shape can rotate
    if (canShift) {
        tetroid.array[tetroid.curTemplateId].rotateTetroid(direction);
    }
}