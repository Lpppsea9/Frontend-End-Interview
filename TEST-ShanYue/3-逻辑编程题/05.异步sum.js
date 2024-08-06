// 【Q421】如何实现一个无限累加的 sum 函数 #428

// sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
// sum(1)(2)(3)(4).valueOf(); //10
// sum(2)(4, 1)(2).valueOf(); //9
// sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

function sum(...args) {
	const f = (...rests) => {
		return sum(...args, ...rests);
	};
	f.valueOf = () => args.reduce((x, y) => x + y, 0);
	return f;
}
