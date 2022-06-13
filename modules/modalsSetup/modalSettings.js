// Selectors for the pause modal
const modalSelector = document.querySelector("#pause-modal")
const modalContentSelector = document.querySelector(".pause-modal-content")

// Selectors for the instructions modal
const instructionModalSelector = document.querySelector("#instruction-modal")
const instructionModalContent = document.querySelector(".instruction-modal-content")

// Selectors for the game over modal
const gameOverSelector = document.querySelector("#game-over-modal")
const gameOverContentSelector = document.querySelector(".game-over-modal-content")

export const modalSettings = {
    pause: modalSelector,
    pauseContent: modalContentSelector,
    instruction: instructionModalSelector,
    instructionContent: instructionModalContent,
    gameOver: gameOverSelector,
    gameOverContent: gameOverContentSelector,
};