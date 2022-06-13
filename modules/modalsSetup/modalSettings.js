const modalSettings = {
    // Selectors for the pause modal
    modalSelector: document.querySelector("#pause-modal"),
    modalContentSelector: document.querySelector(".pause-modal-content"),

    // Selectors for the instructions modal
    instructionModalSelector: document.querySelector("#instruction-modal"),
    instructionModalContent: document.querySelector(".instruction-modal-content"),

    // Selectors for the game over modal
    gameOverSelector: document.querySelector("#game-over-modal"),
    gameOverContentSelector: document.querySelector(".game-over-modal-content"),

    // Fall rate of the shape (1 square in # of milliseconds)
    fallInterval: {
        initial: 800,       
        current: 800
    },

    // Holds setInterval
    gravity: "",

    // Flags indicating whether game is paused, running or over
    pauseFlag: true,
    gameOver: true
};

export {modalSettings};