import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { gridSettings as grid } from '../gameAreaSetup/gridSettings.js';
import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';
import { shapeStatSettings as shapes } from '../headerSetup/initializeShapeStats.js';
import { showModal } from '../modalsSetup/modalVisibility.js';

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
    showModal(document.querySelector("#game-over-modal"), document.querySelector(".game-over-modal-close"));
    game.fallInterval.current = game.fallInterval.initial;
    for (let i = 0; i < grid.tilesWide * grid.tilesHigh; i++) {
        grid.tileArr[i].style.backgroundColor = 'black';
    }
    shapes.generated = 1;
    lines.array.forEach(item => {item.setStat(0)});
    lines.level.setStat(1);
    score.current.setStat(0);
    shapes.templates.forEach(item => {item.setStat(0)});
}