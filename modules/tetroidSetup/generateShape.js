import { tetroidTemplates as tetroids } from './initializeTetroids.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';

// Randomly selects next tetroid to appear
export const generateShape = () => {
    tetroids.curTemplateId = Math.floor(Math.random() * tetroids.templates.length);
    tetroids.templates[tetroids.curTemplateId].initialPos();
    shapes.templates[tetroids.curTemplateId].update(1);
}