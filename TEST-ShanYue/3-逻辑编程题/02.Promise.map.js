// 实现一个 promise.map，进行并发数控制，有以下测试用例

// pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1));

// pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1);

// // 注意输出时间控制
// pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(1000), { concurrency: 2 }).then(
// 	(r) => console.log(r)
// );

function pMap(list, mapper, { concurrency = Infinity }) {
	// list 为 Iterator，先转化为 Array
	list = Array.from(list);
	return new Promise((resolve, reject) => {
		const result = [];
		const len = list.length;
		let resolveCount = 0;
		let currentIndex = 0;
		function next() {
			const index = currentIndex;
			currentIndex++;
			Promise.resolve(list[index])
				.then((o) => mapper(o))
				.then((o) => {
					result[index] = o;
					resolveCount++;
					if (resolveCount === len) {
						resolve(result);
					}
					if (currentIndex < len) {
						next();
					}
				});
		}
		for (let i = 0; i < concurrency && i < len; i++) {
			next();
		}
	});
}
// pMap([1, 2, 3, 4, 5], (x) => x * 3).then((o) => console.log(o));

// const sleep = (seconds) =>
// 	new Promise((resolve) => setTimeout(resolve, seconds));

// const now = Date.now();
// console.log("Start");
// pMap([1, 1, 1], (x) => sleep(x * 1000)).then((o) => {
// 	console.log(o);
// 	console.log(Date.now() - now, "seconds");
// });

// pMap([1, 2, 3], (x) => x * 3).then((o) => console.log(o));

// pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1)).then((o) =>
// 	console.log(o)
// );
const sleep = (seconds) =>
	new Promise((resolve) => setTimeout(resolve, seconds));

console.time();
pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(x * 1000), { concurrency: 2 }).then(
	(o) => {
		console.log(o);
		console.timeEnd();
	}
);
