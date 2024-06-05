// 实现一个 once 函数，记忆返回结果只执行一次
const f = (x) => x;

const onceF = once(f);

//=> 3
onceF(3);

//=> 3
onceF(4);

function once(fn) {
	let flag = false;
	let res = undefined;
	return function (...args) {
		if (!flag) {
			res = fn(...args);
			flag = true;
		}
		return res;
	};
}
console.log(onceF(3));
console.log(onceF(4));
