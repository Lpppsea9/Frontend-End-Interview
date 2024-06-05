// 八大数据类型
const str = ""; //字符串 String
const num = 0; //数字 Number
const bool = false; //布尔值Boolean
const sym = Symbol(0); //Symbol
const big = BigInt(0); //bigInt
const und = undefined; //undefined
const nul = null; //null
const obj = {}; //对象

const isArray = (arr) =>
	Object.prototype.toString.call(arr) === "[object Array]";
