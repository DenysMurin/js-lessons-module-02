// !задачи
// написать скрипт отображения часов и минут в консоли браузера
// в виде ряда формата 14 ч 26 мин.если значение переменной
// равно 0 минут, то выводить 14 часов, без минут

const hours = 14;
const minutes = 1;
let timestring;
if (minutes > 0) {
  timestring = `${hours} ч ${minutes} мин`;
} else {
  timestring = `${hours} ч;`;
}
console.log(timestring);

// через тернал
const hour = 14;
const minute = 0;
let timestring2;
timestring2 = minute > 0 ? `${hour} ч ${minute} мин` : `${hour} ч;`;
console.log(timestring2);

// напиши скрипт для отображения дедлайна времени сдачи проекта. использую if else
// если до дедлайна  0дней, то Today
// если 1  день - Tonorrow
// если 2 дня - Overtomorrow
// если более 3 дней - In the future
const dayUntilDeadLine = 2;
if (dayUntilDeadLine === 0) {
  console.log("Today");
} else if (dayUntilDeadLine === 1) {
  console.log("Tomorrow");
} else if (dayUntilDeadLine === 2) {
  console.log("Overtomorrow");
} else {
  console.log("In the future");
}
