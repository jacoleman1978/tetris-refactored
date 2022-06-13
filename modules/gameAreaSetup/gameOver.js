import {gameSettings as game} from './gameSettings.js';
import {scoreStatSettings as score} from '../statsAreaSetup/initializeScoreStats.js';
import {lineStatSettings as lines} from '../statsAreaSetup/initializeLineStats.js';
import {gridSettings as grid} from './gridSettings.js';
import {shapeStatSettings as shapes} from '../statsAreaSetup/initializeShapeStats.js';

// Ends the game
export const gameOver = () => {
    game.gameOver = true;
    score.current.setHighestScore(score.current, score.highest);
    localStorage.setItem("highScore", score.highest.getStat())
    clearInterval(game.gravity);
    game.pauseFlag = true;
    document.querySelector("#game-score").textContent = score.current.getStat();
    document.querySelector("#user-high-score").textContent = score.highest.getStat();
    document.querySelector("#game-max-level").textContent = lines.level.getStat();
    document.querySelector("#game-total-lines").textContent = lines.total.getStat();
    grid.tileArr.forEach((_value, index) => {
        grid.tileArr[index].style.backgroundColor = 'black';
    })
    showModal(document.querySelector("#game-over-modal"),document.querySelector(".game-over-modal-close"));
    game.fallInterval.current = game.fallInterval.initial;
    for (let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        grid.tileArr[i].style.backgroundColor = 'black';
    }
    shapes.generated = 1;
    lines.array.forEach(item => {item.setStat(0)});
    game.level.setStat(1);
    score.current.setStat(0);
    shapes.array.forEach(item => {item.setStat(0)});
}