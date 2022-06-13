import { gridSettings } from "./gridSettings.js";
import { modalSettings } from "../modalsSetup/modalSettings.js";

// Calculates and sets the width and height of playable area in px, including tile borders using the game object
const adjustTileSize = () => {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let statsBanner = document.querySelector('.stats-banner');
    let shapeStats = document.querySelector('#shape-stats');
    let adjustTileWidth = 0;

    if (screenWidth < 650) {
        gridSettings.isScreenSmaller = true;
        statsBanner.style.flexDirection = "column";
        shapeStats.style.borderRight = "none";
        shapeStats.style.borderBottom = "black 1px solid";
        shapeStats.style.paddingBottom = "5px";
        shapeStats.style.marginBottom = "5px"
        adjustTileWidth = (screenWidth - 175) / gridSettings.tilesWide;
        modalSettings.modalSelector.style.paddingTop = "150px";
    }
    else {
        gridSettings.isScreenSmaller = false;
        statsBanner.style.flexDirection = "row";
        shapeStats.style.borderRight = "black 1px solid";
        shapeStats.style.borderBottom = "none";
        adjustTileWidth = (screenWidth - 175) / gridSettings.tilesWide;
        modalSettings.modalSelector.style.paddingTop = "100px";
        modalSettings.modalSelector.style.height = gridSettings.gridWidth;
        modalSettings.instructionModalSelector.style.height = gridSettings.gridHeight;
    }
    
    //Checks to determine best tileDimension
    let checkTileHeight = adjustTileWidth * 15 + 150;
    if (checkTileHeight < screenHeight) {
        gridSettings.tileDimension = adjustTileWidth;
    }
    else {
        let adjustTileHeight = (screenHeight - 175) / gridSettings.tilesHigh;
        gridSettings.tileDimension = adjustTileHeight;
    }
    gridSettings.gridSelector = document.querySelector('#game-grid');
    gridSettings.gridWidth = (gridSettings.tilesWide * gridSettings.tileDimension + 2 * gridSettings.tilesWide) + 'px';
    gridSettings.gridHeight = (gridSettings.tilesHigh * gridSettings.tileDimension + 2 * gridSettings.tilesHigh) + 'px';
    gridSettings.gridSelector.style.width = gridSettings.gridWidth;
    gridSettings.gridSelector.style.height = gridSettings.gridHeight;
    modalSettings.modalSelector.style.height = gridSettings.gridWidth;
    modalSettings.instructionModalSelector.style.height = gridSettings.gridHeight;
    modalSettings.modalSelector.style.paddingLeft = (screenWidth - gridSettings.tilesWide * gridSettings.tileDimension + 2 * gridSettings.tilesWide) / 2
}

export {adjustTileSize};