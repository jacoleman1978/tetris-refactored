import { Stats } from './stats.js';

// Extends Stats class for how many of a specific tetroid has been spawned
// The shapes will be displayed in the header of the page
// The number of each specific shape will be updated when the shape is generated
export class ShapeStats extends Stats {
    constructor(htmlId, headerTemplate) {
        super(htmlId);
        this.headerTemplate = headerTemplate;
        this.outerDisplaySelector = document.createElement('div');
        this.displaySelector = document.createElement('span');
        this.containerSelector = document.querySelector('#shape-stats');
        this.newDiv = document.createElement('div');
    }
    initialize() {
        //let newDiv = document.createElement('div');
        this.newDiv.className = "header-shapes";
        this.newDiv.style.height = '24px';

        // Create the tetroids for the stat header using black squares
        for (let i = 0; i < 8; i++) {
            let gridTile = document.createElement('div');
            gridTile.style.width = '9px';
            gridTile.style.height = '9px';
            
            if (i == this.headerTemplate[0] || i == this.headerTemplate[1] || i == this.headerTemplate[2] || i == this.headerTemplate[3]) {
                gridTile.style.backgroundColor = "black";
            }
            this.newDiv.append(gridTile);
        }

        this.displaySelector.id = this.htmlId;
        this.setDisplay(this.getStat());
        this.outerDisplaySelector.append(this.newDiv, this.displaySelector);
        this.containerSelector.append(this.outerDisplaySelector);
    }

    // Use a stat shapes object to update the count for a specific shape as well as the total number of shapes that have been generated
    update(shapesObj) {
        this.setStat(this.getStat() + 1);
        shapesObj.generated += 1;
        this.setBackgroundColor('lightblue');
    }

    // Set background color for this shape stat to indicate the next shape generated
    setBackgroundColor(color) {
        this.newDiv.style.backgroundColor = color;
    }
}