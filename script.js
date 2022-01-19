"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const scoreEl = document.querySelector(".score");

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    showMessage("No number!");
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    showMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      showMessage(guess < number ? "Too low!" : "Too high!");
      score--;
      scoreEl.textContent = score;
    } else {
      scoreEl.textContent = 0;
      message.textContent = "You lost!";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  showMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
