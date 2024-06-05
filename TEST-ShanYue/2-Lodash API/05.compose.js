// 实现一个 compose 函数，进行函数合成，比如 redux 中的 compose，react 高阶组件连续调用时的 compose

const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

// 输出1110

const compose =
	(...fns) =>
	(init) =>
		fns.reverse().reduce((prev, cur) => cur(prev), init);

console.log(compose(add10, mul10, add100)(10));
