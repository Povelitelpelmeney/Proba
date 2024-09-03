/*const ar1 = new Array(10, 22, 66, 322, 555, 10, 2323);
const ar2 = new Array(44, 3232, 44, 90, 4, 333, 100);
const raschDengi = (arr) => {
  return arr.reduce((summ, el) => summ + el, 0) / arr.length;
};
const raznZarp = (rash1, rash2, raschDengi) => {
  const sum1 = raschDengi(rash1);
  const sum2 = raschDengi(rash2);
  const bSum = sum1 > sum2 ? sum1 : sum2;
  const mSUm = sum1 > sum2 ? sum2 : sum1;
  return bSum / mSUm >= 1.3
    ? `bonus of ${(bSum / mSUm - 1) * 100}%`
    : `no bonus`;
};
console.log(raznZarp(ar1, ar2, raschDengi));*/
/*const ar1 = [55, 33, 44];
const ar2 = [55, 88, 77];
const func = (...rest) => {
  const obshMass = rest.reduce((arr, el) => {
    arr.push(...el);
    return arr;
  }, []);
  console.log(obshMass);
  const summ = obshMass.reduce((sum, el) => sum + el, 0);
  console.log(summ > 100 ? `Tip is ${summ * 0.15}` : `Tip is ${summ * 0.2}`);
};
console.log(func(ar1, ar2));*/
/*const jack = {
  weight: 79,
  height: 1.7,
  bmi: function () {
    this.data = this.weight / Math.pow(this.height, 2);
    console.log(this.data);
  },
};
jack.bmi();*/

// let ar = [1, 4, 5];
// let a = 55;
// let f = (...rest) => {
//   rest.forEach((el) => {
//     typeof el === "object"
//       ? el.forEach((el2) => console.log(el2))
//       : console.log(el);
//   });
// };
// f(ar, a);
/*const events = new Map([
  [19, "Goal"],
  [21, "Substitution"],
  [43, "Goal"],
  [56, "Substitution"],
  [69, "Yellow card"],
  [73, "Substitution"],
  [75, "Yellow card"],
  [79, "Substitution"],
  [81, "Red card"],
  [93, "Goal"],
]);
const game = {
  team1: "REAL MADRID",
  team2: "BARCELONA",
  players: [
    [
      "Courtois",
      "Vazquez",
      "Militao",
      "Nacho",
      "Mendy",
      "Casemiro",
      "Valverde",
      "Modrich",
      "Kroos",
      "Vinicius",
      "Benzema",
    ],
    [
      "Stegen",
      "Mingueza",
      "Araujo",
      "Lenglet",
      "Dest",
      "Busquets",
      "Jong",
      "Alba",
      "Messi",
      "Pedri",
      "Dembele",
    ],
  ],
  score: "2:1",
  scored: ["Kroos", "Benzema", "Mingueza"],
  date: "Apr 10th, 2021",
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};
const RMteam = [...game.players[0]];
const Bteam = [...game.players[1]];
const [RMgoalkeeper, ...RMplayers] = RMteam;
const allPlayers = [...RMteam, ...Bteam];
const RMteamTotal = [
  ...RMteam,
  "Marcelo",
  "Isco",
  "Asensio",
  "Diaz",
  "Odriozola",
];
const goalScorers = {
  vstav(el, goal) {
    this[el] = goal;
  },
};
const { team1, draw, team2 } = game.odds;
const printGoals = (...rest) => {
  rest.forEach((el) => {
    let goal = 0;
    game.scored.forEach((el2) => (el === el2 ? (goal += 1) : goal));
    goal === 0 ? console.log(`${el}`) : console.log(`${el} scored ${goal}`);
    goal > 0 ? goalScorers.vstav(el, goal) : goal;
  });
};
printGoals(...Bteam, ...RMteamTotal);
let avOdd = Object.values(game.odds).reduce((summ, el) => {
  return summ + el;
}, 0);
avOdd /= Object.values(game.odds).length;
console.log(avOdd);
Object.keys(game.odds).forEach((el) => {
  console.log(`Rate for ${el} victory: ${game.odds[el]} `);
});
console.log(goalScorers);
const uniqueEvents = new Set();
for (let el of events.values()) uniqueEvents.add(el);
console.log(uniqueEvents);
uniqueEvents.delete("Yellow card");
console.log(uniqueEvents);
events.forEach((value, key) => {
  key <= 45
    ? console.log(`1st half ${key}: ${value}`)
    : console.log(`2nd half ${key}: ${value}`);
});*/
/*const func = (...rest) => {
  rest.forEach((el) => {
    let slovo = el.split("_");
    if (slovo.length == 2) {
      let answ = slovo[0] + slovo[1][0].toUpperCase() + slovo[1].slice(1);
      console.log(answ);
    }
  });
};
const arr = [
  "underscore_case",
  "first_name",
  "next_Variable",
  "Calculate_AGE",
  "arrived_flight",
];
*/ (function () {
  const h2 = document.querySelector("h2");
  h2.style.color = "orange";
  document.querySelector("body").addEventListener("click", function () {
    h2.style.color = "green";
  });
})();
