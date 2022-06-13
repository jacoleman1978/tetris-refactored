import { moveLeft } from './moveLeft.js';
import { moveRight } from './moveRight.js';
import { rotate } from './rotate.js';
import { keyListeners } from './keyListeners.js';

// Left button listener
let moveLeftButton = document.querySelector('#move-left');
moveLeftButton.addEventListener('click', () => {
    moveLeftButton.blur();
    moveLeft();
})

// Right button listener
let moveRightButton = document.querySelector('#move-right');
moveRightButton.addEventListener('click', () => {
    moveRightButton.blur();
    moveRight();
})

// Clockwise button listener
let rotateCWButton = document.querySelector('#rotate-CW');
rotateCWButton.addEventListener('click', () => {
    rotateCWButton.blur();
    rotate("CW");
})

// Counter-clockwise button listener
let rotateCCWButton = document.querySelector('#rotate-CCW');
rotateCCWButton.addEventListener('click', () => {
    rotateCCWButton.blur();
    rotate("CCW");
})

// Listeners to use keys to control shape actions
document.addEventListener('keydown', keyListeners);

export const buttonControls = [moveLeftButton, moveRightButton, rotateCWButton, rotateCCWButton];