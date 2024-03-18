// !операторы

console.log("Boolean(true) ->", Boolean(true));
console.log("Boolean(3.14) ->", Boolean(3.14));
console.log("Boolean(-10) ->", Boolean(-10));
console.log("Boolean(true) ->", Boolean(true));
console.log("Boolean('hello') ->", Boolean("hello"));
console.log("Boolean('false') ->", Boolean("false"));
// все остальные false
console.log("Boolean(false)", Boolean(false));
console.log("Boolean(NaN) ->", Boolean(NaN));
console.log("Boolean(null) ->", Boolean(null));
console.log("Boolean(undefined) ->", Boolean(undefined));
console.log("Boolean(0) ->", Boolean(0));
console.log("Boolean('') ->", Boolean(""));
//-----------------------------------------
// и запинается на первом false
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(5 && 4); //true -самое правое
console.log(5 && "mango"); //оба true  - правый
//--------------------------------------
// или приводит к true
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

//--------------------------------------
console.log(false || 5);
console.log(false || null);
// --------------------
// логическое не !
console.log(!5); //false
console.log(!!5); //не не, будет true true
console.log(!false);
// ---------------------------------примеры-----------------------------------------
console.log(true && 3); //3
console.log(false && 3); //false
console.log(true && 4 && "kiwi");
console.log(true && 0 && "kiwi"); //0
console.log(true || 3); //3
console.log(true || 3 || 4); //true
console.log(true || false || 7); //true
console.log(null || 2 || undefined); //2
console.log((true && null && 2) > 0); //второй null  даст null, его преобразует к 0, а 0>0 не может быть
console.log(null || (2 && 3) || 4); //3
