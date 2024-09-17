'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number ';

const randomNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;
console.log(randomNumber);
let currentScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number, please type a number';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Too High';
    document.querySelector('.guess').value = '';
    currentScore = currentScore - 1;
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.guess').value = '';
    currentScore = currentScore - 1;
  } else {
    document.querySelector('.message').textContent = 'Correct Number';
    if (highScore < currentScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  document.querySelector('.score').textContent = currentScore;

  console.log(guess);
});
