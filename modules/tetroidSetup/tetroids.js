import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';
import { gameOver } from '../gameAreaCleanup/gameOver.js';

// Class for each individual tetroid shape and rotational orientation
// There is a maximum of 4 rotational orientations for each shape, so each shape needs 4 versions passed in
export class Tetroid {
    constructor(templateId, color, orientation0, orientation1, orientation2, orientation3) {
        this.id = templateId;
        this.color = color;
        this.vers0 = orientation0;
        this.vers1 = orientation1;
        this.vers2 = orientation2;
        this.vers3 = orientation3;
        this.curOrientation = 0;
        this.curPosTiles = this.vers0.slice();
        this.nextPosTiles = [];
        this.nextRotationTiles = [];
    }
    
    // Checks next position tiles before spawning or moving tetroid
    canMoveTetroid(shiftBy) {
        let canShift = true;
        this.nextPosTiles = this.curPosTiles.slice();
        this.curPosTiles.forEach((tilePos, index) => {
            let shiftedTilePos = tilePos + shiftBy;
            if (shiftedTilePos < grid.tilesWide * grid.tilesHigh) {
                if (grid.tileArr[shiftedTilePos].style.backgroundColor != 'gray') {
                    this.nextPosTiles[index] = shiftedTilePos;
                }
                else {
                    this.nextPosTiles = this.curPosTiles.slice();
                    canShift = false;
                }
            }
            else {
                this.nextPosTiles = this.curPosTiles.slice();
                canShift = false;
            }   
        })
        if (canShift) {
            this.curPosTiles.forEach((_tilePos, index) => {
                grid.tileArr[this.curPosTiles[index]].style.backgroundColor = 'black';
            })
        }
        return canShift;
    }

    // Creates each new tetroid, shifting the base template to the middle columns
    initialPos() {
        this.curOrientation = 0;
        let shiftBy = 3;
        this.curPosTiles = this.vers0.slice(); 
        if(this.canMoveTetroid(shiftBy)) {
            this.curPosTiles = this.vers0.slice();
            this.curPosTiles.forEach((tilePos, index) => {
                this.curPosTiles[index] = tilePos + shiftBy;
                grid.tileArr[tilePos + shiftBy].style.backgroundColor = this.color;
            })
        }
        else {
            this.curPosTiles = this.vers0.slice();
            this.curPosTiles.forEach((tilePos, index) => {
                this.curPosTiles[index] = tilePos + shiftBy;
                grid.tileArr[tilePos + shiftBy].style.backgroundColor = this.color;
            })
            gameOver();
        }
    }
    
    // Updates position of tetroid by arrow keys and gravity
    updatePos() {
        this.nextPosTiles.forEach((tilePos, index) => {
            this.curPosTiles[index] = tilePos;
            grid.tileArr[tilePos].style.backgroundColor = this.color;
        })
    }

    // Selects a rotational orientation of the tetroid
    getVersion(versionNumber) {
        if (versionNumber == 0) {return this.vers0.slice();}
        else if (versionNumber == 1) {return this.vers1.slice();}
        else if (versionNumber == 2) {return this.vers2.slice();}
        else if (versionNumber == 3) {return this.vers3.slice();}
    }

    // Creates array of next rotation
    nextRotation(direction) {
        let currentVers = this.curOrientation;
        let shiftBy = this.curPosTiles[0] - this.getVersion(currentVers)[0];
        if (direction == "CW") {currentVers += 1;}
        else {
            // Choose previous version so can rotate "CCW"
            currentVers -= 1;
            if (currentVers < 0) {currentVers = 3;}
        }
        
        currentVers = currentVers % 4;
        let currentVersTiles = this.getVersion(currentVers);

        currentVersTiles.forEach((tilePos, index) => {
            this.nextRotationTiles[index] = tilePos + shiftBy;
        })
        return this.nextRotationTiles.slice();
    }

    // Rotates tetroid around a fixed point
    rotateTetroid(direction) {
        this.curPosTiles.forEach((tilePos) => {
            grid.tileArr[tilePos].style.backgroundColor = 'black';
        })

        let shiftBy = this.curPosTiles[0] - this.getVersion(this.curOrientation)[0];
        if (direction == "CW") {this.curOrientation += 1;}
        else {
            // Choose previous version so can rotate "CCW"
            this.curOrientation -= 1;
            if (this.curOrientation < 0) {this.curOrientation = 3}
        }
        
        this.curOrientation = this.curOrientation % 4;
        this.curPosTiles = this.getVersion(this.curOrientation);

        this.curPosTiles.forEach((tilePos, index) => {
            this.curPosTiles[index] = tilePos + shiftBy;
            grid.tileArr[this.curPosTiles[index]].style.backgroundColor = this.color;
        })
    }
}