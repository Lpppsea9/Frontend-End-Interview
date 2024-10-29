// 实现函数柯里化

const fn = (x, y, z) => {
	return x + y + z;
};

// const curry = (fn, ...args) => {
// 	console.log(args);
// 	if (args.length >= fn.length) {
// 		console.log("s");
// 		return fn(...args);
// 	}
// 	return (...rest) => {
// 		return curry(fn, ...args, ...rest);
// 	};
// };

// // const f = curry(fn, 1, 2, 3);
// const f1 = curry(fn, 11);
// const f2 = f1(22);
// const f3 = f2(33);
// console.log(f3);

const func = (x, ...y) => {
	console.log("x", x);
	console.log("y", y);
};

func("lppp", 3, 333);
