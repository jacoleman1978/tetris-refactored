import { gameSettings as game } from '../gameAreaSetup/gameSettings.js';
import { keyListeners } from '../gameControls/keyListeners.js';
import { buttonControls } from '../gameControls/initializeBtnControls.js';
import { playGame } from '../gameActions/playGame.js';

// Display modal
export const showModal = (modalSelector, modalCloseSelector) => {
    clearInterval(game.gravity);
    modalSelector.style.display = "block";
    document.removeEventListener('keydown', keyListeners);
    buttonControls.forEach(selector => {selector.disabled = true});
    window.onclick = function(event) {
        if (event.target == modalSelector) hideModal(modalSelector);
    }
    modalCloseSelector.addEventListener('click', () => {hideModal(modalSelector)})
}

// Hide modal
export const hideModal = (modalSelector) => {
    modalSelector.style.display = "none";
    buttonControls.forEach(selector => {selector.disabled = false});
    document.addEventListener('keydown', keyListeners);

    if (game.pauseFlag == true && game.gameOver == false) {
        clearInterval(game.gravity);
        game.gravity = setInterval(playGame, game.fallInterval.current);
        game.pauseFlag = false;
    }
}