import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';
import { keyListeners } from './keyListeners.js';

// Left button listener
let moveLeftButton = document.querySelector('#move-left');
moveLeftButton.addEventListener('click', () => {
    moveLeftButton.blur();
    tetroid.templates[tetroid.curTemplateId].moveTetroid('left');
})

// Right button listener
let moveRightButton = document.querySelector('#move-right');
moveRightButton.addEventListener('click', () => {
    moveRightButton.blur();
    tetroid.templates[tetroid.curTemplateId].moveTetroid('right');
})

// Clockwise button listener
let rotateCWButton = document.querySelector('#rotate-CW');
rotateCWButton.addEventListener('click', () => {
    rotateCWButton.blur();
    tetroid.templates[tetroid.curTemplateId].moveTetroid('CW');
})

// Counter-clockwise button listener
let rotateCCWButton = document.querySelector('#rotate-CCW');
rotateCCWButton.addEventListener('click', () => {
    rotateCCWButton.blur();
    tetroid.templates[tetroid.curTemplateId].moveTetroid('CCW');
})

// Listeners to use keys to control shape actions
document.addEventListener('keydown', keyListeners);

export const buttonControls = [moveLeftButton, moveRightButton, rotateCWButton, rotateCCWButton];