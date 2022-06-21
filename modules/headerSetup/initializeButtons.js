import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { modalSettings as modal } from '../modalsSetup/modalSettings.js';
import { resetGame } from '../gameAreaCleanup/resetGame.js';
import { buttonControls } from '../gameControls/initializeBtnControls.js';
import { showModal } from '../modalsSetup/modalVisibility.js';
import { playGame } from '../gameActions/playGame.js';
import { keyListeners } from '../gameControls/keyListeners.js';

export const initializeHeaderButtons = () => {
    // Create newGame button in score banner that will reset all stats and the board
    let newGameButton = document.querySelector('#new-game');
    newGameButton.addEventListener('click', () => {
        newGameButton.blur();
        resetGame();
        game.gravity = setInterval(playGame, game.fallInterval.current);
        game.gameOver = false;
        game.pauseFlag = false;
    })

    // Create play/pause button in score banner, toggling game.pauseFlag
    let playPauseButton = document.querySelector('#play-pause');
    playPauseButton.addEventListener('click', (event) => {
        if (game.gameOver == false) {
            game.pauseFlag = !game.pauseFlag;
            if (game.pauseFlag == true) {
                playPauseButton.blur();
                buttonControls.forEach(selector => {selector.disabled = false});   
                document.removeEventListener('keydown', keyListeners);
                clearInterval(game.gravity);
                showModal(modal.pause, document.querySelector(".pause-modal-close"));
            }
            else {
                buttonControls.forEach(selector => {selector.disabled = true});
                document.addEventListener('keydown', keyListeners);
            }
        }
    })

    // Creates Instructions button to display a modal
    let instructionsButton = document.querySelector("#instructions")
    instructionsButton.addEventListener('click', () => {
        if (game.pauseFlag == true) {
            showModal(modal.instruction, document.querySelector(".instruction-modal-close"));
        }
    })
}