import { tetroidSettings as tetroid } from './initializeTetroids.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';

// Randomly selects next tetroid to appear
export const generateShape = () => {
    // Set a nextTemplateId for a new game
    if (shapes.generated == 0) {
        tetroid.nextTemplateId = Math.floor(Math.random() * tetroid.templates.length);
    } 

    // Replace the current template id with the next one which was generated with the previous shape
    tetroid.curTemplateId = tetroid.nextTemplateId;

    // Place the new shape on the game grid and update shape stats
    tetroid.templates[tetroid.curTemplateId].initialPos();
    shapes.templates[tetroid.curTemplateId].update(shapes);

    // Select the next shape that will be generated and highlight the shape in the shape stats in red
    tetroid.nextTemplateId = Math.floor(Math.random() * tetroid.templates.length);
    shapes.templates[tetroid.nextTemplateId].setBackgroundColor('red');
}