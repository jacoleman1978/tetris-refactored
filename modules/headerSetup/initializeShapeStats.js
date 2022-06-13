import { ShapeStats } from './shapeStats.js';

// Instantiate all ShapeStats class objects
const lineShapeStats = new ShapeStats('line-shape', [1, 3, 5, 7]);  
const lShapeStats = new ShapeStats('l-shape', [3, 5, 6, 7]);
const revLShapeStats = new ShapeStats('rev-l-shape', [2, 3, 5, 7])
const tShapeStats = new ShapeStats('t-shape', [3, 4, 5, 7]);
const sShapeStats = new ShapeStats('s-shape', [3, 4, 5, 6]);
const revSShapeStats = new ShapeStats('rev-s-shape', [2, 4, 5, 7]);
const squareShapeStats = new ShapeStats('square-shape', [2, 4, 3, 5]);

// Store all ShapeStat objects in shapeStatArr
const shapeStatArr = [lineShapeStats, lShapeStats, revLShapeStats, tShapeStats, sShapeStats, revSShapeStats, squareShapeStats];

// Initialize ShapeStats
shapeStatArr.forEach(item => {item.initialize()});

export const shapeStatSettings = {
    templates: shapeStatArr,
    generated: 1
}