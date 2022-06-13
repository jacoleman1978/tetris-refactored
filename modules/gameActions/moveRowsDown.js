import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';

// Uses a rowNum as a starting position to clear and shift all other rows down by one
export const moveRowsDown = (rowNum) => {
    for (let row = rowNum; row > 0; row--) {
        for (let tileInRow = 0; tileInRow < grid.tilesWide; tileInRow++) {
            grid.tileArr[10 * row + tileInRow].style.backgroundColor = grid.tileArr[10 * (row - 1) + tileInRow].style.backgroundColor;
        }
    }
}