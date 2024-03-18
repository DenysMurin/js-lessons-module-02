// папиши скрипт проверки подписки пользователя для доступа контента
// есть три типа подписки - free, pro, vip
// получить подписку могут только vip, pro
const sub = "vip";
const hasAccess = sub === "pro" || sub === "vip";
console.log("Does the user has access:", hasAccess);

// ------------------------------------
// напиши скрипт, который провреряет возожность открыть чат с пользователем
// для этого пользователь может быть либо: другом, онлайн, без режима не беспокоить
const isOnline = true;
const isFriend = true;
const isDnd = true; //do not disturb

const canOpenChat = isOnline && isFriend && !isDnd; //is Dnd - закрытый доступ - НЕ
console.log("можно открытть чат?", canOpenChat);
