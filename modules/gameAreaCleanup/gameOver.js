import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { scoreStatSettings as score } from '../headerSetup/initializeScoreStats.js';
import { lineStatSettings as lines } from '../headerSetup/initializeLineStats.js';
import { showModal } from '../modalsSetup/modalVisibility.js';

// Ends the game
export const gameOver = () => {
    // Clear the setInterval causing shapes to be generated and fall
    clearInterval(game.gravity);

    // Set the pauseFlag and gameOver flags
    game.gameOver = true;
    game.pauseFlag = true;
    
    // Set stats for the gameOver modal
    document.querySelector("#game-score").textContent = score.current.getStat();
    document.querySelector("#user-high-score").textContent = score.highest.getStat();
    document.querySelector("#game-max-level").textContent = lines.level.getStat();
    document.querySelector("#game-total-lines").textContent = lines.total.getStat();
    
    // Show the gameOver modal
    showModal(document.querySelector("#game-over-modal"), document.querySelector(".game-over-modal-close"));
}