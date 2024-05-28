// const promise = new Promise((resolve, reject) => {
// 	reject("状态改为rejected");
// });
// promise.then(
// 	(fulRes) => {
// 		console.log("fulRes", fulRes);
// 	},
// 	(rejRea) => {
// 		console.log("rejRea", rejRea);
// 	}
// );

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
	constructor(fn) {
		fn(this.resolve, this.reject);
	}
	status = "pending";
	value = null;
	fulfilledCallback = [];
	rejectedCallback = [];

	resolve = (value) => {
		if (this.status === PENDING) {
			this.value = value;
			this.status = FULFILLED;
			while (this.fulfilledCallback.length) {
				this.fulfilledCallback?.shift()(value);
			}
		}
	};

	reject = (reason) => {
		if (this.status === PENDING) {
			this.value = reason;
			this.status = REJECTED;
			while (this.rejectedCallback.length) {
				this.rejectedCallback?.shift()(reason);
			}
		}
	};

	then(fulfilledFn, rejectedFn) {
		return new MyPromise((resolve, reject) => {
			const callbackMap = {
				[FULFILLED]: fulfilledFn,
				[REJECTED]: rejectedFn,
				[PENDING]: () => {
					this.fulfilledCallback.push(fulfilledFn);
					this.rejectedCallback.push(rejectedFn);
				},
			};
			const result = callbackMap[this.status](this.value);
			resolvePromise(result, resolve, reject);
		});
	}
}

const resolvePromise = (result, resolve, reject) => {
	if (result instanceof MyPromise) {
		result.then(resolve, reject);
	} else {
		resolve(result);
	}
};

const p1 = new MyPromise((resolve, reject) => {
	// setTimeout(resolve, 1000, 1);
	resolve(1);
});

p1.then((res) => {
	console.log("res", res);
	return 2;
	// return new MyPromise((resolve) => resolve(2));
}).then((res) => {
	console.log(res);
});

// const domLikeArgs = document.getElementsByClassName("argLikes");
// const { a: aa, b: bb } = { a: 3, b: 4 };
// console.log(bb);
function move({ x = 0, y = 0 } = {}) {
	return [x, y];
}
function move1({ x, y } = { x: 0, y: 0 }) {
	return [x, y];
}
console.log("move ——————————>", move());

const map = new Map();
map.set("name", "lppp");
map.set("age", 20);
const iterator = map.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log(Array(100).fill(0));
