"use strict";
const butt = document.querySelector(".button");
let data = document.querySelector(".score");
const again = document.querySelector(".again");
let answers = [];
let str;
const options = ["JS", "PY", "RUBY", "JAVA", "C#"];
options.forEach((el, poz) => {
  answers[poz] = 0;
});
const promp = () => {
  const str = options.reduce((st, el) => {
    return st + " " + el;
  }, "");
  let choice = prompt(`which one is better of ${str}?`);
  return choice;
};
const printResults = (data) => {
  typeof data === "object"
    ? alert(
        "Survey results: " +
          data.reduce((st, el) => {
            return st + " " + el;
          }, "")
      )
    : alert(data);
};
const logNewAnswer = (answers) => {
  let option = promp();
  while (option < 0 || option > answers.length) {
    option = promp();
  }
  answers[option - 1] += 1;
  return answers;
};
butt.textContent = "beb";
butt.addEventListener("click", function () {
  answers = logNewAnswer(answers);
  printResults(answers);
  console.log(answers);
  str = answers.reduce((st, el) => {
    return st + " " + el;
  }, "");
  data.textContent = str;
});
again.addEventListener("click", function () {
  answers = answers.reduce((arr, el) => {
    el = 0;
    arr.push(el);
    return arr;
  }, []);
  str = answers.reduce((st, el) => {
    return st + " " + el;
  }, "");
  data.textContent = str;
});
