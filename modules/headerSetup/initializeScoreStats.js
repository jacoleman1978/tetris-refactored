import { Scores } from './scores.js';

// Instantiate all Scores class objects
const currentScore = new Scores('current-score');
const highestScore = new Scores('high-score');

// Store all score related objects in scoreArr
const scoreArr = [currentScore, highestScore];

// Initialize currentScore to 0
currentScore.setStat(0);

// Use the highest score stored in local storage, otherwise set highestScore to 0
if (localStorage.getItem("highScore") != null) {
    highestScore.setStat(localStorage.getItem("highScore"));
    highestScore.setHighestScore(currentScore, highestScore);
} else {
    highestScore.setStat(0);
}

export const scoreStatSettings = {
    current: currentScore,
    highest: highestScore
}