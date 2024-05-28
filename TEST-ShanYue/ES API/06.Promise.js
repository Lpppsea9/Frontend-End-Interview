// 实现链式调用
// 异步调用

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function resolvePromise(p, result, resolve, reject) {
	if (p === result) {
		console.error("TypeError: Chaining cycle detected for promise");
	}
	if (result instanceof MyPromise) {
		result.then(resolve, reject);
	} else {
		resolve(result);
	}
}

class MyPromise {
	constructor(fn) {
		const resolveHandler = (value) => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				while (this.fulfilledCallbacks.length) {
					this.fulfilledCallbacks.shift()(value);
				}
			}
		};
		const rejectHandler = (reason) => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.value = reason;
				while (this.rejectedCallbacks.length) {
					this.rejectedCallbacks.shift()(reason);
				}
			}
		};
		try {
			fn(resolveHandler, rejectHandler);
		} catch (error) {
			rejectHandler(error);
		}
	}
	status = PENDING;
	value = null;
	fulfilledCallbacks = [];
	rejectedCallbacks = [];

	then(fulfilledFn, rejectedFn) {
		fulfilledFn = typeof fulfilledFn === "function" ? fulfilledFn : (v) => v;
		rejectedFn =
			typeof rejectedFn === "function"
				? rejectedFn
				: (v) => {
						throw v;
				  };

		const p = new MyPromise((resolve, reject) => {
			const fulfilledMicroTask = () => {
				queueMicrotask(() => {
					try {
						const x = fulfilledFn(this.value);
						resolvePromise(p, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};
			const rejectedMicroTask = () => {
				queueMicrotask(() => {
					try {
						const x = rejectedFn(this.value);
						resolvePromise(p, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};

			const callbackMap = {
				[FULFILLED]: fulfilledMicroTask,
				[REJECTED]: rejectedMicroTask,
				[PENDING]: () => {
					this.fulfilledCallbacks.push(fulfilledMicroTask);
					this.rejectedCallbacks.push(rejectedMicroTask);
				},
			};
			callbackMap[this.status](this.value);
			// resolvePromise(p, result, resolve, reject);
		});
		return p;
	}
}

const p1 = new MyPromise((resolve, reject) => {
	// setTimeout(resolve, 1000, 1);
	// resolve(1);
	// resolve("海久");
	reject("hai");
});
// p1.then((res) => {
// 	console.log("res", res);
// 	return "rrr2";
// })
// 	.then((res2) => {
// 		console.log("res2", res2);
// 		return "rrr3";
// 	})
// 	.then((res3) => {
// 		console.log("res3", res3);
// 	});

p1.then("p")
	.then("o")
	.then((res) => {
		console.log("res", res);
	});

// const p2 = p1.then((res) => {
// 	console.log("rr", res);
// 	return p2;
// });
