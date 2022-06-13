import { gridSettings as grid} from "./gridSettings.js";
import { modalSettings as modal} from "../modalsSetup/modalSettings.js";

// Calculates and sets the width and height of playable area in px, including tile borders using the game object
const adjustTileSize = () => {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let statsBanner = document.querySelector('.stats-banner');
    let shapeStats = document.querySelector('#shape-stats');
    let adjustTileWidth = 0;

    if (screenWidth < 650) {
        grid.isScreenSmaller = true;
        statsBanner.style.flexDirection = "column";
        shapeStats.style.borderRight = "none";
        shapeStats.style.borderBottom = "black 1px solid";
        shapeStats.style.paddingBottom = "5px";
        shapeStats.style.marginBottom = "5px"
        adjustTileWidth = (screenWidth - 175) / grid.tilesWide;
        modal.modalSelector.style.paddingTop = "150px";
    }
    else {
        grid.isScreenSmaller = false;
        statsBanner.style.flexDirection = "row";
        shapeStats.style.borderRight = "black 1px solid";
        shapeStats.style.borderBottom = "none";
        adjustTileWidth = (screenWidth - 175) / grid.tilesWide;
        modal.modalSelector.style.paddingTop = "100px";
        modal.modalSelector.style.height = grid.gridWidth;
        modal.instructionModalSelector.style.height = grid.gridHeight;
    }
    
    //Checks to determine best tileDimension
    let checkTileHeight = adjustTileWidth * 15 + 150;
    if (checkTileHeight < screenHeight) {
        grid.tileDimension = adjustTileWidth;
    }
    else {
        let adjustTileHeight = (screenHeight - 175) / grid.tilesHigh;
        grid.tileDimension = adjustTileHeight;
    }
    grid.gridSelector = document.querySelector('#game-grid');
    grid.gridWidth = (grid.tilesWide * grid.tileDimension + 2 * grid.tilesWide) + 'px';
    grid.gridHeight = (grid.tilesHigh * grid.tileDimension + 2 * grid.tilesHigh) + 'px';
    grid.gridSelector.style.width = grid.gridWidth;
    grid.gridSelector.style.height = grid.gridHeight;
    modal.modalSelector.style.height = grid.gridWidth;
    modal.instructionModalSelector.style.height = grid.gridHeight;
    modal.modalSelector.style.paddingLeft = (screenWidth - grid.tilesWide * grid.tileDimension + 2 * grid.tilesWide) / 2
}

export {adjustTileSize};