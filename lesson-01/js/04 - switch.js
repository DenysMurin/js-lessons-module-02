// !оператор switch

let msg;
switch (1) {
  case 1:
    msg = "yes";
    break;
  case 2:
    msg = "not 1, but 2";
    break;
  case 3:
    msg = "not 1, but 3";
    break;
  default:
    msg = "no matches";
}
console.log(msg);
// --------------------
const username = "какое то имя, которого нет";

switch (username) {
  case "Poly":
    console.log(`hello, ${username}`);
    break;
  case "Ajax":
    console.log(`hello, ${username}`);
    break;
  case "Mango":
    console.log(`hello, ${username}`);
    break;
  default:
    console.log("no username exist");
}
/// напиши скрипт для отображения дедлайна времени сдачи проекта. использую if else
// если до дедлайна  0дней, то Today
// если 1  день - Tonorrow
// если 2 дня - Overtomorrow
// если более 3 дней - In the future
const dayUntilDeadLine = "0";

switch (dayUntilDeadLine) {
  case 0:
    console.log(`hello, сегодня пизда`);
    break;
  case 1:
    console.log(`hello, завтра пизда`);
    break;
  case 2:
    console.log(`hello, послезавтра пизда`);
    break;
  default:
    console.log("еще отдыхай");
}
// --------------------------------------------
// задача по доставке товара
// опция сохраняется в переменной option - 1 самовывоз, 2 курьер, 3 почта
// в переменную записать сообщение в зависимости от опции
// можете получить товар завтра с 12:00 в нашем офисе
// курьер доставит товар с 9:00 до 18:00
// посылка будет отправлена сегодня
// вам позвонит менеджер
const option = 1;
let message = "";

switch (option) {
  case 1:
    message = "можете получить товар завтра с 12:00 в нашем офисе";
    break;
  case 2:
    message = "курьер доставит товар с 9:00 до 18:00";
    break;
  case 3:
    message = "посылка будет отправлена сегодня";
    break;
  default:
    message = "вам позвонит менеджер";
    break;
}
console.log(message);
// -------------------------------------
// написать скрипт, сообщающий о поддержке браузера
// название браузера сохраняется в переменной Browser
// доступные браузеры chrome/ edge/firefox/safari/opera
// в переменную result записать сообщение
// chrom - это самый популярный браузер
// edge - у тебя браузер от microsoft
// firefox/safari/opera - мы так же поддерживаем этот браузер
// другие - этот браузер не поддерживается

const browser = "opera";
let result;
switch (browser) {
  case "chrome":
    result = "это самый популярный браузер";
    break;
  case "edge":
    result = "у тебя браузер от microsoft";
    break;
  case "edge":
    result = "у тебя браузер от microsoft";
    break;
  case "firefox":
  // result = "мы так же поддерживаем этот браузер";
  // break;
  case "safari":
  // result = "мы так же поддерживаем этот браузер";
  // break;
  case "opera":
    result = "мы так же поддерживаем этот браузер";
    break;
  default:
    result = "этот браузер не поддерживается";
    break;
}
console.log(result);
// так как повторяются параметры, то их моно удалить, они сгруппировываются
