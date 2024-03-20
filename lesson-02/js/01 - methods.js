const username2 = "jacob Mercer";
function greeting(username2) {
  return `welcome to Star Hotel, ${username2}`;
}
const greet_1 = greeting(username2);
console.log("greet_1:", greet_1);
// !методы рядов
// их нужно вызывать как функцию
const username = "Jacob Mercer";
const userNameLength = username.length;
console.log(userNameLength);
// slice - делат копию и срез оригинала

const result1 = username.slice(1, 5); //1 - это второй по счетуб 5 не включается - до 5-го
const result2 = username.slice(0); //если второй аргумент не указать, то идет до конца
const result3 = username.slice(-1);
const result4 = username.slice(-4, -1);
console.log(username[6]); //вывод индекса буквы
console.log(`
${result1}
${result2}
${result3}
${result4}`);
// !lower, uppercase
console.log();
console.log(username.toLocaleLowerCase()); //учитывает местоположение пользователя, опказывает местную раскладку
console.log(username2.toUpperCase());
// -------------------------------------------------------------------
// !includes
const TRIGGER =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos illum      sed ut quos ad perspiciatis, deserunt impedit id veritatis recusandae,      deleniti error modi maiores delectus explicabo blanditiis. Tenetur,       incidunt?";
console.log(TRIGGER.includes("Lorem")); //true
console.log(TRIGGER.includes("lorem")); //false
//! startsWith -endsWith
console.log(username.startsWith("acob"));
console.log(username.startsWith("acob", 1)); // то же, только показывает, с какой позиции искать
console.log(username.endsWith("acob"));
// !indexOf
function getFileName(file) {
  if (file.indexOf(".") > -1) {
    return file.slice(0, file.indexOf("."));
  } else {
    return file;
  }
}
const res1 = getFileName("styles.css");
console.log(res1);
