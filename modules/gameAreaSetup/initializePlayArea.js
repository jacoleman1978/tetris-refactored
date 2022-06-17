import { gridSettings as grid } from './gridSettings.js';
import { adjustTileSize } from './adjustTileSize.js';

export const initializePlayArea = () => {
    // Determines all width and height settings
    adjustTileSize();

    // Instantiates all game tiles and adds to the tileArr and DOM
    for(let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        // Creates a new div as a game tile
        let gridTile = document.createElement('div');

        // Sets properties of the game tile, adding it to the DOM and tileArr
        gridTile.classList = "grid-tile";
        gridTile.style.width = grid.tileDimension + "px";
        gridTile.style.height = grid.tileDimension + "px";
        gridTile.style.backgroundColor = 'black';
        grid.gridSelector.append(gridTile);
        grid.tileArr.push(gridTile);
    }

    // Adjust the tile size if the game window size is adjusted
    window.addEventListener('resize', () => {
        // Determines all width and height settings
        adjustTileSize();

        // Find all the game tiles in the DOM, setting new width and height for each tile
        let gridTiles = document.querySelectorAll('.grid-tile');
        gridTiles.forEach(tile => {
            tile.style.width = grid.tileDimension + "px";
            tile.style.height = grid.tileDimension + "px";
        })
    }) 
}