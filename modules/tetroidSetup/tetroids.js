import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';
import { gameSettings as game} from '../gameAreaSetup/gameSettings.js';
import { gameOver } from '../gameAreaCleanup/gameOver.js';

// Class for each individual tetroid shape and rotational orientation
// There is a maximum of 4 rotational orientations for each shape, so each shape needs 4 versions passed in
export class Tetroid {
    constructor(templateId, color, orientation0, orientation1, orientation2, orientation3) {
        this.id = templateId;
        this.color = color;
        this.templates = [orientation0, orientation1, orientation2, orientation3];
        this.curOrientation = 0;
        this.curPosTiles = this.templates[0].slice();
        this.nextPosTiles = [];
        this.nextRotationTiles = [];
        this.shiftBy = 0;
    }

    setOrientation(orientationNum) {
        this.curOrientation = orientationNum;
    }
    
    // Checks if the position is valid, returning a boolean
    isPositionValid(tilePosTemplate) {
        let canMove = true;
        let positions = new Set(tilePosTemplate)

        // Checks each newPosition to determine if it is already occupied
        this.nextPosTiles = tilePosTemplate.map(position => {
            let newPosition = position + this.shiftBy;

            if (newPosition < grid.tilesWide * grid.tilesHigh) {
                if (positions.has(newPosition) == false && grid.tileArr[newPosition].style.backgroundColor != 'black') {
                    canMove = false;
                }
            } else {
                canMove = false;
            }
            
            return newPosition
        });
        return canMove
    }

    // Creates each new tetroid if not a gameOver scenario
    initialPos() {
        let canPlace = true;
        this.setOrientation(0);
        this.shiftBy = 0;
        this.curPosTiles = this.templates[0].slice();

        this.curPosTiles.forEach(position => {
            if (grid.tileArr[position].style.backgroundColor != 'black') {
                canPlace = false;
            }
        })

        if (canPlace == true) {
            this.updateColor(this.curPosTiles, this.color);
        } else if (game.gameOver == false) {
            gameOver();
        }
    }

    // Sets all tiles in the given template to the color given
    updateColor(tilePosTemplate, color) {
        tilePosTemplate.forEach(position => {
            grid.tileArr[position].style.backgroundColor = color;
        });
    }

    // Checks whether tetroid is on 'left' or 'right' edge of the game area, setting this.shiftBy to an appropriate value and returning a boolean.
    // Returns false for the other directions (being on edge doesn't matter), setting this.shiftBy to an appropriate value
    // direction can be: 'left', 'right', 'down'
    isOnEdge(direction) {
        if (direction === 'down') {
            this.shiftBy = 10;
            return false
        }
        
        let edgeTile = 0;
        let onEdge = false;

        if (direction === 'left') {
            edgeTile = 0;
            this.shiftBy = -1;
        } else if (direction === 'right') {
            edgeTile = 9;
            this.shiftBy = 1;
        }
        
        this.curPosTiles.forEach(position => {
            if (position % 10 == edgeTile) {
                onEdge = true
            }
        })

        if (direction === 'left' || direction === 'right') {
            return onEdge
        } else {
            return true
        }
    }

    // Returns the next rotation orientation
    getNextRotationOrientation(direction) {
        let orientation = this.curOrientation;
        let nextTemplate = [];
        let shiftBy = this.curPosTiles[0] - this.templates[orientation % 4][0];

        if (direction === 'CW') {
            orientation += 1;
            nextTemplate = this.templates[orientation % 4].slice();
        } else if (direction === 'CCW') {
            orientation -= 1;
            if (orientation < 0) {
                orientation = 3;
                nextTemplate = this.templates[orientation].slice();
            } else {
                nextTemplate = this.templates[orientation % 4].slice();
            }
        }

        this.nextRotationTiles = nextTemplate.map(position => {
            return position + shiftBy
        })

        return orientation
    }

    // Checks if the rotation orientation would cause the shape to split, parts appearing on both sides of the game grid
    isRotationWrapping() {
        let onLeftEdge = false;
        let onRightEdge = false;

        this.nextRotationTiles.forEach(position => {
            if (position % 10 == 0) {
                onLeftEdge = true;
            }
            if (position % 10 == 9) {
                onRightEdge = true;
            }
        })

        if (onLeftEdge == true && onRightEdge == true) {
            return true
        } else {
            return false
        }
    }

    // Move tetroid if possible
    // Direction can be: 'left', 'right', 'down', 'CW', 'CCW'
    moveTetroid(direction) {
        let canMove = false;

        if (direction === 'down' || direction === 'left' || direction === 'right') {
            if (this.isOnEdge(direction) == false && this.isPositionValid(this.curPosTiles) == true) {
                canMove = true;
            }
        } else if (direction === 'CW' || direction === 'CCW') {
            let orientation = this.getNextRotationOrientation(direction);
            this.shiftBy = 0;

            if (this.isRotationWrapping() == false && this.isPositionValid(this.nextRotationTiles) == true) {
                canMove = true;
            }

            if (canMove == true) {
                this.setOrientation(orientation);
            }
        }

        if (canMove == true) {
            this.updateColor(this.curPosTiles, 'black');
            this.updateColor(this.nextPosTiles, this.color);
            this.curPosTiles = this.nextPosTiles.slice();
        }
    }
}