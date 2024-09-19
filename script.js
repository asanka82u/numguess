'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number ';

let randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);
let currentScore = 20;
let highScore = 0;

function gameLoop() {}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number, please type a number';
    //   too high codition
  } else if (guess !== randomNumber) {
    if (currentScore > 0) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too high ...!' : 'Too low...!';
      document.querySelector('.guess').value = '';
      currentScore--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !!!';
    }
  } else {
    // winning condition

    document.querySelector('.message').textContent = 'You win !!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highScore < currentScore) {
      highScore = currentScore;
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  document.querySelector('.score').textContent = currentScore;

  console.log(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  currentScore = 20;
  //   HTML manipulating
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  console.log(randomNumber);
});

//  this comment is done for check the git commit update
