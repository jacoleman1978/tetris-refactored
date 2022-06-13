export const gridSettings = {
    tileDimension: 0,       // Tile size set dynamically
    tilesWide: 10,          // 10 tiles per row
    tilesHigh: 15,          // 15 rows
    gridWidth: 0,           // Width of game grid set dynamically
    gridHeight: 0,          // Height of the game grid set dynamically
    gridSelector: '',       // DOM selector for the game grid
    tileArr: [],            // Holds DOM selectors for each tile
    isScreenSmaller: false, //Flag to determine if the small screen breakpoint was reached
    filledSqInRow: [],      //Keeps track of how many squares are filled in each row
}