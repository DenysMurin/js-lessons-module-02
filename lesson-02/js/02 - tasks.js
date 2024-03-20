//напиши скрипт, проверяющий, заканчивается ли значение переменной link символом /
//если нет, добавь в конец значения переменной этот символ
//используй if else

// let link = "https://my-site.com/about";
// function checkLink(originLink) {
//   const hasSlash = originLink.endsWith("/");
//   if (hasSlash) {
//     return originLink;
//   } else {
//     return `${originLink}/`;
//   }
// }
// console.log(checkLink(link));

//! форматирование ссылки(includes и логическое И)
// напиши скрипт, который проверяет, заканчивается ли значение переменной link символом /
// если нет, то добавь в конец значение линк этот символ, но только в том случае,
// если в link есть подряд "my-site"
// используй конструкцию if else

let url = "https://my-site.com/about/";

function checkUrl(originUrl) {
  const checkString = "my-site";
  const lastIndex = originUrl.length - 1;
  //   console.log("checkUrl lastIndex:", lastIndex);
  //   console.log("checkUrl lastIndex:", originUrl[lastIndex]);
  //   console.log(originUrl.includes("/", lastIndex));
  const hasSlash2 = originUrl.includes("/", lastIndex);
  const hasCheckString = originUrl.includes(checkString);
  if (!hasSlash2 && hasCheckString) {
    return `${originUrl}/`;
  } else {
    return originUrl;
  }
}
const res1 = checkUrl(url);
console.log(res1);

//! поиск в строке методом includes
const blackListedWord1 = "spam";
const blackListedWord2 = "sale";

const string1 = "its Abbul. it is not a spam. i offer to you million";
const string2 = "biggest SALE this week";
const string3 = "fatlivesmatter advertising compaigne";

function checkSpam(stringToCheck, spamWord1, spamWord2) {
  const normalizedString = stringToCheck.toLowerCase();
  const hasSpamWord1 = normalizedString.includes(spamWord1);
  const hasSpamWord2 = normalizedString.includes(spamWord2);

  if (hasSpamWord1 || hasSpamWord2) {
    return `The string has spam`;
  } else {
    return `no spam word`;
  }
}
const res2 = checkSpam(string1, blackListedWord1, blackListedWord2);
const res3 = checkSpam(string2, blackListedWord1, blackListedWord2);
const res4 = checkSpam(string3, blackListedWord1, blackListedWord2);
console.log(res2);
console.log(res3);
console.log(res4);
