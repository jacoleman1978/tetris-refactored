import {moveLeft} from './moveLeft.js';
import {moveRight} from './moveRight.js';
import {rotate} from './rotate.js';

export const keyListeners = (event) => {
    // Press left arrow to move tetroid left
    if (event.code == "ArrowLeft") {moveLeft();}

    // Rotate tetroid counterclockwise if the d key is pressed
    else if (event.code == "KeyD") {rotate("CCW");}

    // Rotate tetroid clockwise if the f key is pressed
    else if (event.code == "KeyF") {rotate("CW");}

    // Press right arrow to move tetroid right
    else if (event.code == "ArrowRight") {moveRight();}
}