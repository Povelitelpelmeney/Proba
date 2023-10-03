"use strict";
// console.log(document.querySelector(".guess-message").textContent);
// document.querySelector(".guess-message").textContent = "Угадано!";
// document.querySelector(".question").textContent = 19;
let secret;
let numberPoints;
console.log(secret);
let ok = 0;
let bestScoreArr=[0,0,0];
let bestScore;
////////////////////////////
document.querySelector(".guess-message1").classList.add("close")
document.querySelector(".guess-message2").classList.add("close")
document.querySelector(".guess-message3").classList.add("close")
let mainString1=document.querySelector(".H1")
let mainString2=document.querySelector('.H2')
let check=document.querySelector(".check")
let level;
/////////////////////////////
const pointsLeft=document.querySelector(".points_left");
const func = document
  .querySelector(".check")
  .addEventListener("click", function () {
    let curNum = Number(document.querySelector(".number-input").value);
    console.log(curNum);
    if(level===undefined){
      if(curNum>=1 && curNum<=3){
        level=curNum
        if(level===1){
          secret= Math.ceil(Math.random() * 20);
          numberPoints=20
        }
        if(level===2){
          secret= Math.ceil(Math.random() * 20);
          numberPoints=14
          console.log(secret)
        }
        if(level===3){
          secret= Math.ceil(Math.random() * 20);
          numberPoints=8
        }
        mainString1.classList.add("close")
        mainString2.classList.remove('close')
        bestScore=bestScoreArr[level-1]
        document.querySelector(".highscore").textContent=bestScore
        document.querySelector(".score").textContent=numberPoints;
        document.querySelector(".between").textContent=`(Между 1 и 20)`
        document.querySelector(".btn").classList.remove("close")
        document.querySelector(".guess-message1").classList.remove("close")
        document.querySelector(".guess-message2").classList.remove("close")
        document.querySelector(".guess-message3").classList.remove("close")
        document.querySelector(".between").classList.remove("close")
      }
      console.log(level)
    }
    else{
    let gameScore = Number(document.querySelector(".score").textContent);
    if (gameScore == 0 || ok == 1) {
      return;
    } else {
      if (!curNum) {
        document.querySelector(`.guess-message1`).textContent = "Введите число!";
      } else if (secret !== curNum) {
        if (gameScore > 1) {
          document.querySelector(".guess-message1").textContent =
            secret > curNum
              ? "Загаданное число больше."
              : "Загаданное число меньше.";
          gameScore--;
          document.querySelector(".score").textContent = gameScore;
        } else {
          gameScore--;
          document.querySelector(".score").textContent = gameScore;
          document.querySelector(`.guess-message1`).textContent = "Вы проиграли";
          document.querySelector("body").style.backgroundColor = "red";
          document.querySelector("h1").textContent = "Уже поздно угадывать!";
        }
      } else if (secret === curNum) {
        if(gameScore>=numberPoints/2){
          pointsLeft.textContent=`У вас осталось ${gameScore-1} очков(а)!`
          pointsLeft.classList.remove("close");
        }
        ok = 1;
        document.querySelector(".question").textContent = secret;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".question").style.width = "100em";
        document.querySelector("h2").textContent = "Поздравляю!";
        gameScore--;
        document.querySelector(".score").textContent = gameScore;
        if (bestScore < gameScore) {
          bestScore = gameScore;
          document.querySelector(".highscore").textContent = bestScore;
          document.querySelector(".guess-message1").textContent = "Новый рекорд!";
        }
        else{
          document.querySelector(".guess-message1").textContent = "Вы угадали";
        }
      }
    }}
  });
document.querySelector(".again").addEventListener("click", function () {
  secret = Math.ceil(Math.random() * 20);
  console.log(secret);
  ok = 0;
  pointsLeft.textContent="";
  mainString1.classList.add("close")
  mainString2.classList.remove('close')
  bestScoreArr[level-1]=document.querySelector(".highscore").textContent;
  console.log(bestScoreArr)
  document.querySelector(".score").textContent=numberPoints;
  document.querySelector(".between").classList.add("close")
  document.querySelector(".btn").classList.remove("close")
  document.querySelector(".guess-message1").classList.add("close")
  document.querySelector(".guess-message2").classList.add("close")
  document.querySelector(".guess-message3").classList.add("close")
  document.querySelector(".between").classList.add("close")
  mainString1.classList.remove("close")
  mainString2.classList.add('close')
  pointsLeft.classList.add("close");
  document.querySelector(".question").textContent = "???";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess-message1").textContent = "Начни угадывать";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".question").style.width = "25rem";
  document.querySelector(".number-input").value = "";
  level=undefined
});

