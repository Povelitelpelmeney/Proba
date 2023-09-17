"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("#score--1");
const btnNew = document.querySelector(".btn--new");
const btnThrow = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
score0El.textContent = 0;
score1El.textContent = 0;
let curScore0 = document.querySelector("#current--0");
let curScore1 = document.querySelector("#current--1");
let curScore = 0;
let curPlayer = 0;
const score = [0, 0];
const dice = document.querySelector(".dice");
dice.classList.add("hidden");
const win = function () {
  document
    .querySelector(`.player--${curPlayer}`)
    .classList.add("player--winner");
  document
    .querySelector(`.player--${curPlayer}`)
    .classList.remove("player--active");
};
const action = function () {
  if (score[0] >= 100 || score[1] >= 100) {
    return;
  } else {
    let random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);
    dice.classList.remove("hidden");
    dice.src = `dice${random}.png`;
    if (random !== 1) {
      curScore += random;
      document.querySelector(`#current--${curPlayer}`).textContent = curScore;
    } else {
      curScore = 0;
      document.querySelector(`#current--${curPlayer}`).textContent = curScore;
      player1.classList.toggle("player--active");
      curPlayer == 0 ? (curPlayer = 1) : (curPlayer = 0);
      player0.classList.toggle("player--active");
    }
  }
};
btnThrow.addEventListener("click", action);
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    action();
  }
});
btnHold.addEventListener("click", function () {
  if (score[0] >= 100 || score[1] >= 100) {
    return;
  } else {
    score[curPlayer] += curScore;
    document.querySelector(`#score--${curPlayer}`).textContent =
      score[curPlayer];
    if (score[curPlayer] >= 100) {
      win();
    } else {
      player1.classList.toggle("player--active");
      player0.classList.toggle("player--active");
      curScore = 0;
      document.querySelector(`#current--${curPlayer}`).textContent = curScore;
      curPlayer == 0 ? (curPlayer = 1) : (curPlayer = 0);
    }
  }
});
btnNew.addEventListener("click", function () {
  if (score[0] >= 100) {
    player0.classList.toggle("player--winner");
  }
  if (score[1] >= 100) {
    player1.classList.toggle("player--winner");
  }
  if (
    !player0.classList.contains("player--active") &&
    player1.classList.contains("player--active")
  ) {
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
  if (
    !player0.classList.contains("player--active") &&
    !player0.classList.contains("player--active")
  ) {
    player0.classList.toggle("player--active");
  }
  score[0] = 0;
  score[1] = 0;
  curPlayer = 0;
  curScore = 0;
  curScore0.textContent = 0;
  curScore1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add("hidden");
});
