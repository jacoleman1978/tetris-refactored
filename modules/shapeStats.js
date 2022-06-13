import { Stats } from "./stats.js";

// Extends Stats class for how many of a specific tetroid has been spawned
// The shapes will be displayed in the header of the page
// The number of each specific shape will be updated when the shape is generated
class ShapeStats extends Stats {
    constructor(htmlId, asideTemplate) {
        super(htmlId);
        this.asideTemplate = asideTemplate;
        this.outerDisplaySelector = document.createElement('div');
        this.displaySelector = document.createElement('span');
        this.containerSelector = document.querySelector('#shape-stats');
    }
    initialize() {
        let newDiv = document.createElement('div');
        newDiv.className = "header-shapes";
        newDiv.style.height = '24px';
        for (let i = 0; i < 8; i++) {
            let gridTile = document.createElement('div');
            gridTile.style.width = '9px';
            gridTile.style.height = '9px';
            
            if (i == this.asideTemplate[0] || i == this.asideTemplate[1] || i == this.asideTemplate[2] || i == this.asideTemplate[3]) {
                gridTile.style.backgroundColor = "black";
            }
            newDiv.append(gridTile);
        }
        this.displaySelector.id = this.htmlId;
        this.displaySelector.textContent = this.getStat();
        this.outerDisplaySelector.append(newDiv, this.displaySelector);
        this.containerSelector.append(this.outerDisplaySelector);
    }
    update(adjustedBy, shapesGenerated) {
        this.setStat(this.getStat() + adjustedBy)
        this.displaySelector.textContent = this.getStat();
        shapesGenerated += adjustedBy;
    }
}

export {ShapeStats};