import { tetroidSettings as tetroid } from './initializeTetroids.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';

// Randomly selects next tetroid to appear
export const generateShape = () => {
    tetroid.curTemplateId = Math.floor(Math.random() * tetroid.templates.length);
    tetroid.templates[tetroid.curTemplateId].initialPos();
    shapes.templates[tetroid.curTemplateId].update(1, shapes.generated);
}