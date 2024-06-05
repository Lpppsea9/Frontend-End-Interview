const arr = [1, [2, [3]]];

// flat不会改变原数组
function flatten(arr, depth = 1) {
	if (depth === 0) return arr;
	return arr.reduce(
		(a, c) => a.concat(Array.isArray(c) ? flatten(c, depth - 1) : c),
		[]
	);
}
console.log(flatten(arr));
