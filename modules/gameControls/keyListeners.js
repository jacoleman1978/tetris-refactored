import { tetroidSettings as tetroid } from '../tetroidSetup/initializeTetroids.js';

export const keyListeners = (event) => {
    // Press left arrow to move tetroid left
    if (event.code == "ArrowLeft") {
        tetroid.templates[tetroid.curTemplateId].moveTetroid('left')
    }

    // Rotate tetroid counterclockwise if the d key is pressed
    else if (event.code == "KeyD") {
        tetroid.templates[tetroid.curTemplateId].moveTetroid('CCW')
    }

    // Rotate tetroid clockwise if the f key is pressed
    else if (event.code == "KeyF") {
        tetroid.templates[tetroid.curTemplateId].moveTetroid('CW')
    }

    // Press right arrow to move tetroid right
    else if (event.code == "ArrowRight") {
        tetroid.templates[tetroid.curTemplateId].moveTetroid('right')
    }

    // Press down arrow to move tetroid down
    else if (event.code == "ArrowDown") {
        tetroid.templates[tetroid.curTemplateId].moveTetroid('down');
    }
}