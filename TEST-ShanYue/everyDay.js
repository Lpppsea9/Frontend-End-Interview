const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

const resolvePromise = (p, result, resolve, reject) => {
	if (p === result) {
		reject(new Error("Chaining cycle detected for promise #<Promise>"));
	}
	// 判断result是不是promise
	if (result instanceof MyPromise) {
		result.then(resolve, reject);
	} else {
		resolve(result);
	}
};

class MyPromise {
	constructor(fn) {
		try {
			// 这里的fn其实就是new Promise传递的函数
			fn(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	// 初始化状态以及成功，失败的值
	status = PENDING;
	value = null;
	// 新增记录成功与失败回调的参数
	fulfilledCallback = [];
	rejectedCallback = [];

	// 静态resolve
	static resolve(value) {
		if (value instanceof MyPromise) {
			return value;
		}
		return new MyPromise((resolve, reject) => {
			resolve(value);
		});
	}

	// 静态reject
	static reject(value) {
		if (value instanceof MyPromise) {
			return value;
		}
		return new MyPromise((resolve, reject) => {
			reject(value);
		});
	}

	resolve = (value) => {
		// 当调用resolve时修改状态成fulfilled，同时记录成功的值
		if (this.status === PENDING) {
			this.value = value;
			this.status = FULFILLED;
			// 新增成功回调的调用
			while (this.fulfilledCallback.length) {
				this.fulfilledCallback.shift()?.(value);
			}
		}
	};

	reject = (reason) => {
		// 当调用reject时修改状态成rejected，同时记录失败的理由
		if (this.status === PENDING) {
			this.value = reason;
			this.status = REJECTED;
			// 新增失败回调的调用
			while (this.rejectedCallback.length) {
				this.rejectedCallback.shift()?.(reason);
			}
		}
	};

	then = (fulfilledFn, rejectedFn) => {
		// 新增回调判断，如果没传递，那我们就定义一个单纯起value接力作用的函数
		fulfilledFn =
			typeof fulfilledFn === "function" ? fulfilledFn : (value) => value;
		rejectedFn =
			typeof rejectedFn === "function"
				? rejectedFn
				: (value) => {
						throw value;
				  };
		// 我们得在每次调用then时返回一个Promise
		const p = new MyPromise((resolve, reject) => {
			// 封装成功的微任务
			const fulfilledMicrotask = () => {
				// 创建一个微任务等待 promise2 完成初始化
				queueMicrotask(() => {
					try {
						// 获取成功回调函数的执行结果
						const x = fulfilledFn(this.value);
						// 传入 resolvePromise 集中处理
						resolvePromise(p, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};
			// 封装失败的微任务
			const rejectedMicrotask = () => {
				// 创建一个微任务等待 promise2 完成初始化
				queueMicrotask(() => {
					try {
						// 调用失败回调，并且把原因返回
						const x = rejectedFn(this.value);
						// 传入 resolvePromise 集中处理
						resolvePromise(p, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				});
			};
			const callbackMap = {
				[FULFILLED]: fulfilledMicrotask,
				[REJECTED]: rejectedMicrotask,
				// 针对异步问题，新增pending状态时记录并保存回调的操作
				[PENDING]: () => {
					this.fulfilledCallback.push(fulfilledMicrotask);
					this.rejectedCallback.push(rejectedMicrotask);
				},
			};
			callbackMap[this.status]();
		});
		return p;
	};
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
