// !разветвления с дебаггером
let msg;
const isGreater = 1 > 0;
console.log("before");
if (isGreater) {
  msg = "Да, больше";
} else {
  msg = "нет, меньше";
}
console.log("after");
console.log(msg);

// ---------------------------------------------

// ----------------------------------------------
let messag;
const username = "Poly";

if (username === "mango") {
  messag = `hello, ${username}`;
} else if (username === "Poly") {
  messag = `hello, ${username}`;
} else if (username === "ajax") {
  messag = `hello, ${username}`;
} else {
  messag = `так как нет такого имени, то не определили`;
}
console.log(messag);
// ----------------------------
// игра
//  уровень 1 - 100
// уровень 2 - 1000
// уровень  3 - 2000
// const points = 5000;
function getRandomPoints() {
  let points;
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    points = Number.parseInt(randomNumber * 1000);
  } else {
    points = Number.parseInt(randomNumber * 100);
  }
  return points;
}
const points = getRandomPoints();
if (points < 100) {
  console.log(`level 1, you have ${points}`);
} else if (points <= 1000) {
  console.log(`level 2 ,you have ${points},`);
} else if (points >= 2000) {
  console.log(`level 3 ,you have ${points},`);
}
// --------------------------------------------
const balance = 1000;
let message1;
if (balance >= 0) {
  message1 = "positive";
} else {
  message1 = "negative";
}
console.log(message1);
// ! тернарный оператор
// поледнее выражение можно укоротить(расскометировать)
const balance2 = -1000;
let message2 = balance2 >= 0 ? "positive" : "negative";
console.log(message2);
