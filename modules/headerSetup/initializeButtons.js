import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { modalSettings as modal } from '../modalsSetup/modalSettings.js';
import { resetGame } from '../gameAreaCleanup/resetGame.js';
import { buttonControls } from '../gameControls/initializeBtnControls.js';
import { playGame } from '../gameActions/playGame.js';

export const initializeHeaderButtons = () => {
    // Create newGame button in score banner that will reset all stats and the board
    let newGameButton = document.querySelector('#new-game');
    newGameButton.addEventListener('click', () => {
        newGameButton.blur();
        resetGame();
        clearInterval(game.gravity);
        game.gravity = setInterval(playGame, game.fallInterval.current);
        game.pauseFlag = false;
    })

    // Create play/pause button in score banner, toggling game.pauseFlag
    let playPauseButton = document.querySelector('#play-pause');
    playPauseButton.addEventListener('click', (event) => {
        if (game.pauseFlag) {
            playPauseButton.blur();
            buttonControls.forEach(selector => {selector.disabled = false});
            //document.addEventListener('keydown', keyListeners)
            clearInterval(game.gravity);
            game.gravity = setInterval(playGame, game.fallInterval.current);
            game.pauseFlag = false;
        }
        else {
            clearInterval(game.gravity);
            buttonControls.forEach(selector => {selector.disabled = true});
            //document.removeEventListener('keydown', keyListeners)
            game.pauseFlag = true;
            showModal(modal.pause, document.querySelector(".pause-modal-close"), true);
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