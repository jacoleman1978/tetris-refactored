import { modalSettings as modal } from "./modalSettings.js";
import { gridSettings as grid } from "../gameAreaSetup/gridSettings.js";
import { gameSettings as game } from "../gameAreaSetup/gameSettings.js";
import { buttonControls } from "../gameControls/initializeBtnControls.js";

// Display modal
export const showModal = (modalSelector, modalCloseSelector, pause = false) => {
    modalSelector.style.display = "block";
    modal.pauseContent.style.height = grid.gridHeight;
    window.onclick = function(event) {
        if (event.target == modalSelector) hideModal(modalSelector);
    }
    modalCloseSelector.addEventListener('click', () => {hideModal(modalSelector, pause)})
}

// Hide modal
// TODO: playGame function
export const hideModal = (modalSelector, pause) => {
    modalSelector.style.display = "none";
    if (pause == true && game.gameOver == false) {
        buttonControls.array.forEach(selector => {selector.disabled = false});
        clearInterval(game.gravity);
        game.gravity = setInterval(playGame, game.fallInterval.current);
        game.pauseFlag = false;
    }
}