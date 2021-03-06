import { gridSettings as grid } from './gridSettings.js';
import { modalSettings as modal } from '../modalsSetup/modalSettings.js';

// Calculates and sets the width and height of playable area in px, including tile borders using the game object
export const adjustTileSize = () => {
    // Use browser window settings to get width and height values
    let screenWidth = window.innerWidth;
    console.log(screenWidth)
    let screenHeight = window.innerHeight;
    let statsBanner = document.querySelector('.stats-banner');
    let shapeStats = document.querySelector('#shape-stats');
    let adjustTileWidth = 0;

    // Display settings for screens with width less than 650px
    if (screenWidth < 650) {
        grid.isScreenSmaller = true;
        statsBanner.style.flexDirection = "column";
        shapeStats.style.borderRight = "none";
        shapeStats.style.borderBottom = "black 1px solid";
        shapeStats.style.paddingBottom = "5px";
        shapeStats.style.marginBottom = "5px"
        adjustTileWidth = (screenWidth - 175) / grid.tilesWide;
        modal.pause.style.paddingTop = "150px";
    }
    // Display settings for screens with width equal to or greater than 650px
    else {
        grid.isScreenSmaller = false;
        statsBanner.style.flexDirection = "row";
        shapeStats.style.borderRight = "black 1px solid";
        shapeStats.style.borderBottom = "none";
        adjustTileWidth = (screenWidth - 175) / grid.tilesWide;
        modal.pause.style.paddingTop = "100px";
        modal.pause.style.height = grid.gridWidth;
        modal.instruction.style.height = grid.gridHeight;
    }
    
    //Checks to determine best tileDimension to maximize playable area
    let checkTileHeight = adjustTileWidth * 15 + 150;
    if (checkTileHeight < screenHeight) {
        grid.tileDimension = 0.65 * adjustTileWidth;
    }
    else {
        let adjustTileHeight = (screenHeight - 175) / grid.tilesHigh;
        grid.tileDimension = 0.65 * adjustTileHeight;
    }

    // Sets width and height values in px
    grid.gridSelector = document.querySelector('#game-grid');
    grid.gridWidth = (grid.tilesWide * grid.tileDimension + 2 * grid.tilesWide) + 'px';
    grid.gridHeight = (grid.tilesHigh * grid.tileDimension + 2 * grid.tilesHigh) + 'px';
    grid.gridSelector.style.width = grid.gridWidth;
    grid.gridSelector.style.height = grid.gridHeight;
    modal.pause.style.height = grid.gridWidth;
    modal.instruction.style.height = grid.gridHeight;
    modal.pause.style.paddingLeft = (screenWidth - grid.tilesWide * grid.tileDimension + 2 * grid.tilesWide) / 2;
    document.querySelector('.modal').style.height = grid.gridHeight;
    document.querySelector('img').style.height = grid.gridHeight;

}