const p1 = new Promise((resolve, reject) => {
	resolve(1);
});

const p2 = new Promise((resolve, reject) => {
	resolve(2);
});

const p3 = new Promise((resolve, reject) => {
	resolve(3);
});

function promiseAll(list) {
	if (!Array.isArray(list)) {
		return "Type Error";
	}
	let count = 0;
	const len = list.length;
	const result = [];
	return new Promise((resolve, reject) => {
		for (let i = 0; i < len; i++) {
			Promise.resolve(list[i])
				.then((r) => {
					count++;
					result[i] = r;
					if (count === len) {
						return resolve(result);
					}
				})
				.catch((e) => reject(e));
		}
	});
}

promiseAll([p1, p2, p3]).then((res) => {
	console.log("rrr", res);
});
