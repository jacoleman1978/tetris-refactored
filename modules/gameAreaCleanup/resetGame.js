import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';
import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';
import { tetroidSettings as tetroids } from '../tetroidSetup/initializeTetroids.js';

export const resetGame = () => {
    // Clear the setInterval causing shapes to be generated and fall
    clearInterval(game.gravity);

    // Clear the game grid of all shapes
    for (let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        grid.tileArr[i].style.backgroundColor = 'black';
    }
    
    // Reset all numerical values to original values
    game.fallInterval.current = game.fallInterval.initial;
    shapes.generated = 0;
    lines.array.forEach(item => {item.setStat(0)});
    lines.level.setStat(1);
    score.current.setStat(0);
    shapes.templates.forEach(item => {
        item.setStat(0);
        item.setBackgroundColor('lightblue');
    });
    tetroids.templates.forEach(item => {
        item.setOrientation(0);
        item.curPosTiles = item.templates[0].slice();
        item.nextPosTiles = [];
        item.nextRotationTiles = [];
        item.shiftBy = 0;
    })
}