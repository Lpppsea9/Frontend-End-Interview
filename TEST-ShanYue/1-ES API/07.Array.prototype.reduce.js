// => 55
reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y);

// => 155
reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);

// => NaN
reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, undefined);

function reduce(list, fn, ...init) {
	let next = init.length ? init[0] : list[0];
	for (let i = init.length ? 0 : 1; i < list.length; i++) {
		next = fn(next, list[i]);
	}
	console.log("next", next);
	return next;
}
