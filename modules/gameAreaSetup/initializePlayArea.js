import { gridSettings as grid} from "./gridSettings.js";
import { adjustTileSize } from "./adjustTileSize.js";

const initializePlayArea = () => {
    adjustTileSize();
    // Instantiates all game tiles and adds to the tileArr
    for(let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        let gridTile = document.createElement('div');
        gridTile.classList = "grid-tile";
        gridTile.style.width = grid.tileDimension + "px";
        gridTile.style.height = grid.tileDimension + "px";
        gridTile.style.backgroundColor = 'black';
        grid.gridSelector.append(gridTile);
        grid.tileArr.push(gridTile);
    }

    // Sets a counter for each row's filled in tiles to 0
    for(let i = 0; i < grid.tilesHigh; i++) {
        grid.filledSqInRow[i] = 0;
    }

    // Adjust the tile size if the game window size is adjusted
    window.addEventListener('resize', () => {
        adjustTileSize();
        let gridTiles = document.querySelectorAll('.grid-tile');
        gridTiles.forEach(tile => {
            tile.style.width = grid.tileDimension + "px";
            tile.style.height = grid.tileDimension + "px";
        })
    }) 
}

export {initializePlayArea};