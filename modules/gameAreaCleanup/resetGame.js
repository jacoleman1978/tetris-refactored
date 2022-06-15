import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';
import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';

export const resetGame = () => {
    if (localStorage.getItem("highScore") != null) {
        score.highest.setStat(localStorage.getItem("highScore"));
    }
    game.gameOver = false;
    clearInterval(game.gravity);
    game.fallInterval.current = game.fallInterval.initial;
    for (let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        grid.tileArr[i].style.backgroundColor = 'black';
    }
    for(let i = 0; i < grid.tilesHigh; i++) {
        grid.filledSqInRow[i] = 0;
    }
    shapes.shapesGenerated = 1;
    lines.array.forEach(item => {item.setStat(0)});
    lines.level.setStat(1);
    score.current.setStat(0);
    shapes.templates.forEach(item => {item.setStat(0)});
}