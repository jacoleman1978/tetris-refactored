// Selectors for the pause modal
const modalSelector = document.querySelector("#pause-modal")
const modalContentSelector = document.querySelector(".pause-modal-content")

// Selectors for the instructions modal
const instructionModalSelector = document.querySelector("#instruction-modal")
const instructionModalContent = document.querySelector(".instruction-modal-content")

// Selectors for the game over modal
const gameOverSelector = document.querySelector("#game-over-modal")
const gameOverContentSelector = document.querySelector(".game-over-modal-content")

const modalSettings = {
    modalSelector: modalSelector,
    modalContentSelector: modalContentSelector,
    instructionModalSelector: instructionModalSelector,
    instructionModalContent: instructionModalContent,
    gameOverSelector: gameOverSelector,
    gameOverContentSelector: gameOverContentSelector,
};

export {modalSettings};