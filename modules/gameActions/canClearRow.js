    import { gridSettings as grid} from '../gameAreaSetup/gridSettings';
    
    // Checks if all tiles in a row are occupied by checking the background color
    // rowNum is 0 through game.tilesHigh 
    export const canClearRow = (rowNum) => {
        let filledTiles = 0;
        for (let i = 0; i < grid.tilesWide; i++) {
            if (grid.tileArr[rowNum * 10 + i].style.backgroundColor != "black") {
                filledTiles += 1;
            }
        }

        if (filledTiles == grid.tilesWide) {return true;};
        return false;
    }