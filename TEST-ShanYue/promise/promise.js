const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

resolvePromise = (result, resolve, reject) => {
	if (result instanceof MyPromise) {
		result.then(resolve, reject);
	} else {
		resolve(result);
	}
};

class MyPromise {
	constructor(fn) {
		fn(this.resolve, this.reject);
	}
	status = "pending";
	value = null;
	fulfilledList = [];
	rejectededList = [];

	resolve = (value) => {
		if (this.status === PENDING) {
			this.status = FULFILLED;
			this.value = value;
			while (this.fulfilledList.length) {
				this.fulfilledList.shift()?.(value);
			}
		}
	};
	reject = (reason) => {
		if (this.status === PENDING) {
			this.status = REJECTED;
			this.value = reason;
			while (this.rejectededList.length) {
				this.rejectededList.shift()?.(reason);
			}
		}
	};
	then = (fulfilledFn, rejectedFn) => {
		return new MyPromise((resolve, reject) => {
			const statusMap = {
				[FULFILLED]: fulfilledFn,
				[REJECTED]: rejectedFn,
				[PENDING]: () => {
					this.fulfilledList.push(fulfilledFn);
					this.rejectededList.push(rejectedFn);
				},
			};
			const result = statusMap[this.status](this.value);
			resolvePromise(result, resolve, reject);
		});
	};
}

// const p = new MyPromise((resolve, reject) => {
// 	resolve(1);
// 	// setTimeout(resolve, 1000, 1);
// });

// p.then((res) => {
// 	console.log(res);
// 	return new MyPromise((resolve, reject) => {
// 		// resolve(2);
// 		reject(2);
// 	});
// }).then((res) => {
// 	console.log(res);
// });
MyPromise.defer = MyPromise.deferred = function () {
	let dfd = {};
	dfd.promise = new MyPromise((resolve, reject) => {
		dfd.resolve = resolve;
		dfd.reject = reject;
	});
	return dfd;
};
module.exports = MyPromise;
