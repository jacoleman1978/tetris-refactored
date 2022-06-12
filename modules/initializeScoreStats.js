import { Scores } from "./scores.js";

// Instantiate all Scores class objects
const currentScore = new Scores('currentScore');
const highestScore = new Scores('highScore');

// Store all score related objects in scoreArr
const scoreArr = [currentScore, highestScore];

// Initialize currentScore to 0
currentScore.setStat(0);

// Use the highest score stored in local storage, otherwise set highestScore to 0
if (localStorage.getItem("highScore") != null) {
    highestScore.stat = localStorage.getItem("highScore");
    highestScore.updateHighScoreDisplay(scoreArr, highestScore);
} else {
    highestScore.setStat(0);
}

export {currentScore, highestScore, scoreArr};