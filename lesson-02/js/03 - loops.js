// сначала выполняется как минимум один раз
// после прохода итерации меняется счетчик. пока не станет false
console.log("before");
for (let index = 0; index <= 10; index++) {
  console.log("Inside cycle");
}
console.log("after");

// -------------------------оно же
console.log("before");
const start = 0;
const end = 10;

for (let index_2 = start; index_2 <= end; index_2++) {
  console.log("cycle2");
}
console.log("after");
// обратный отсчет--------------------------------------------------
console.log("before---3");
const start_2 = 10;
const end_2 = 0;
let str = " ";
let sum = 0;

for (let index_3 = start_2; index_3 > end_2; index_3 -= 1) {
  //   console.log("cycle3");
  str += index_3 + "_";
  sum += index_3;
  // console.log(index_3);
}
console.log(str);
console.log(sum);
console.log("after---3");

// увеличение счетчика на 2------------------------
console.log("счетчик на 2 начало");
let sum2 = 0;
for (let i = 0; i < 10; i += 2) {
  console.log(i);
  sum2 += i;
}
console.log(" сумма :", sum2);
console.log("счетчик на 2 конец");
// !инкрементб декремент
let a = 10;
let b = ++a;
let c = a++;
console.log(a); //
console.log(b);
console.log(c);
// !wbrks while
console.log("while start");
let counter = 0;

// const isOne = counter++;

while (counter < 10) {
  counter++;
  if (counter === 6) {
    break;
  }
  console.log(counter);
  console.log("while end внутри ");
}
console.log("while end");
// !do while
do {
  console.log("some info"); //выполнится в любом случае
} while (counter < 0);
