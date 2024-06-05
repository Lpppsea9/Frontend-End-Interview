// => [[1, 2, 3], [4, 5, 6], [7]]
// chunk([1, 2, 3, 4, 5, 6, 7], 3);

function chunk(arr, num) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		const index = Math.floor(i / num);
		res[index] ??= [];
		res[index].push(arr[i]);
	}
	return res;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
