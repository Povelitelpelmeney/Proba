"use strict";
// console.log(document.querySelector(".guess-message").textContent);
// document.querySelector(".guess-message").textContent = "Угадано!";
// document.querySelector(".question").textContent = 19;
let secret = Math.ceil(Math.random() * 20);
console.log(secret);
let ok = 0;
let bestScore = document.querySelector(".highscore").textContent;
const pointsLeft=document.querySelector(".points_left");
const func = document
  .querySelector(".check")
  .addEventListener("click", function () {
    let curNum = Number(document.querySelector(".number-input").value);
    console.log(curNum);
    let gameScore = Number(document.querySelector(".score").textContent);
    if (gameScore == 0 || ok == 1) {
      return;
    } else {
      if (!curNum) {
        document.querySelector(".guess-message").textContent = "Введите число!";
      } else if (secret !== curNum) {
        if (gameScore > 1) {
          document.querySelector(".guess-message").textContent =
            secret > curNum
              ? "Загаданное число больше."
              : "Загаданное число меньше.";
          gameScore--;
          document.querySelector(".score").textContent = gameScore;
        } else {
          gameScore--;
          document.querySelector(".score").textContent = gameScore;
          document.querySelector(".guess-message").textContent = "Вы проиграли";
          document.querySelector("body").style.backgroundColor = "red";
          document.querySelector("h1").textContent = "Уже поздно угадывать!";
        }
      } else if (secret === curNum) {
        if(gameScore>=10){
          pointsLeft.textContent=`У вас осталось ${gameScore-1} очков(а)!`
          pointsLeft.classList.remove("close");
        }
        ok = 1;
        document.querySelector(".question").textContent = secret;
        document.querySelector(".guess-message").textContent = "Вы угадали";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".question").style.width = "100em";
        document.querySelector("h1").textContent = "Поздравляю!";
        gameScore--;
        document.querySelector(".score").textContent = gameScore;
        if (bestScore < gameScore) {
          bestScore = gameScore;
          document.querySelector(".highscore").textContent = bestScore;
        }
      }
    }
  });
document.querySelector(".again").addEventListener("click", function () {
  secret = Math.ceil(Math.random() * 20);
  console.log(secret);
  ok = 0;
  pointsLeft.textContent="";
  pointsLeft.classList.add("close");
  document.querySelector(".question").textContent = "???";
  document.querySelector(".score").textContent = 20;
  document.querySelector("h1").textContent = "Угадай число!";
  document.querySelector(".guess-message").textContent = "Начни угадывать";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".question").style.width = "25rem";
  document.querySelector(".number-input").value = "";
});
//document.querySelector("body").style.backgroundColor = "green";
