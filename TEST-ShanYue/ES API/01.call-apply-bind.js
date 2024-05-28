// const obj = {
// 	name: "lppp",
// 	sayName: function (arg1, arg2) {
// 		console.log("this.name", this.name, arg1, arg2);
// 	},
// };
// const obj2 = {
// 	name: "ppp",
// };

// Function.prototype.myCall = function (context) {
// 	if (typeof this !== "function") {
// 		console.error("type error");
// 	}
// 	let args = [...arguments].slice(1),
// 		result = null;
// 	context = context || window;
// 	context.fn = this;
// 	result = context.fn(...args);
// 	delete context.fn;
// 	return result;
// };

// Function.prototype.myApply = function (context) {
// 	if (typeof this !== "function") {
// 		console.error("type error");
// 	}
// 	let args = [...arguments][1],
// 		result = null;
// 	context = context || window;
// 	context.fn = this;
// 	result = context.fn(...args);
// 	return result;
// };

const z = 0;
const obj = {
	z: 1,
};
function fn(x, y) {
	this.name = "sea9";

	console.log(this.z);
	console.log(x);
	console.log(y);
}
fn.prototype.age = 26;

/*
  bind 返回一个绑定了this的新函数, 支持柯里化
  bind 是硬绑定 
  考虑bind new 调用
*/
Function.prototype.myBind = function (context) {
	const args = Array.prototype.slice.call(arguments, 1);
	const fn = this;
	return function Fn() {
		const restArgs = Array.prototype.slice.call(arguments);
		const argsAll = Array.prototype.concat(args, restArgs);
		return fn.apply(this instanceof Fn ? this : context, argsAll);
	};
};

const bound = fn.myBind(obj, 2);
const person = new bound(3);
console.log(person.name);
console.log(person.age);
