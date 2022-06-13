import { Scores } from "./scores.js";

// Instantiate all Scores class objects
const currentScore = new Scores('current-score');
const highestScore = new Scores('high-score');

// Store all score related objects in scoreArr
const scoreArr = [currentScore, highestScore];

// Initialize currentScore to 0
currentScore.setStat(0);

// Use the highest score stored in local storage, otherwise set highestScore to 0
if (localStorage.getItem("high-score") != null) {
    highestScore.stat = localStorage.getItem("high-score");
    highestScore.updateHighScoreDisplay(scoreArr, highestScore);
} else {
    highestScore.setStat(0);
}

const scoreStatSettings = {
    currentScore: currentScore,
    highestScore: highestScore
}

export {scoreStatSettings};