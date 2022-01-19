'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const scoreEl = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    message.textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      message.textContent = 'Too high!';
      score--;
      scoreEl.textContent = score;
    } else {
      scoreEl.textContent = 0;
      message.textContent = 'You lost!';
    }
  } else {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      scoreEl.textContent = 0;
      message.textContent = 'You lost!';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
