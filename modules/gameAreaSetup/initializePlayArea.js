import { gridSettings } from "./gridSettings.js";
import { adjustTileSize } from "./adjustTileSize.js";

const initializePlayArea = () => {
    adjustTileSize();
    // Instantiates all game tiles and adds to the tileArr
    for(let i = 0; i < gridSettings.tilesWide * gridSettings.tilesHigh; i++) {
        let gridTile = document.createElement('div');
        gridTile.classList = "gridTile";
        gridTile.style.width = gridSettings.tileDimension + "px";
        gridTile.style.height = gridSettings.tileDimension + "px";
        gridTile.style.backgroundColor = 'black';
        gridSettings.gridSelector.append(gridTile);
        gridSettings.tileArr.push(gridTile);
    }

    // Sets a counter for each row's filled in tiles to 0
    for(let i = 0; i < gridSettings.tilesHigh; i++) {
        gridSettings.filledSqInRow[i] = 0;
    }

    // Adjust the tile size if the game window size is adjusted
    window.addEventListener('resize', () => {
        adjustTileSize();
        let gridTiles = document.querySelectorAll('.gridTile');
        gridTiles.forEach(tile => {
            tile.style.width = gridSettings.tileDimension + "px";
            tile.style.height = gridSettings.tileDimension + "px";
        })
    }) 
}

export {initializePlayArea};