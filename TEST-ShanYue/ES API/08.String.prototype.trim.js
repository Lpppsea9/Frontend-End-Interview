//=> hello
const text1 = "    hello   ";

//=> hello
const text2 = "    hello   \t\n";

const trim = (str) => str.trim() || str.replace(/^\s+|\s+$/g, "");
console.log(trim(text1));
console.log(trim(text2));
