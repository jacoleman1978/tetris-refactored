import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { keyListeners } from './keyListeners.js';

// Left button listener
let moveLeftButton = document.querySelectorAll('#move-left');

// Right button listener
let moveRightButton = document.querySelectorAll('#move-right');

// Clockwise button listener
let rotateCWButton = document.querySelectorAll('#rotate-CW');

// Counter-clockwise button listener
let rotateCCWButton = document.querySelectorAll('#rotate-CCW');

// Down button listener
let moveDownButton = document.querySelectorAll('.move-down');

let btnControls = {
    left: moveLeftButton,
    right: moveRightButton,
    CW: rotateCWButton,
    CCW: rotateCCWButton,
    down: moveDownButton
}

for (const direction in btnControls) {
    btnControls[direction].forEach(selector => {
        selector.addEventListener('click', () => {
            selector.blur();
            if (game.pauseFlag == false && game.gameOver == false) {
                tetroid.templates[tetroid.curTemplateId].moveTetroid(direction);
            }
        })
    })
}

// Listeners to use keys to control shape actions
document.addEventListener('keydown', keyListeners);

export const buttonControls = [moveLeftButton, moveRightButton, rotateCWButton, rotateCCWButton, moveDownButton];