const list = [6, 3, 4, 8, 7, 5];
const getMaxTwo = (list) => {
	let max = -Infinity,
		secondMax = -Infinity;
	for (const x of list) {
		if (x > max) {
			secondMax = max;
			max = x;
		} else if (x > secondMax) {
			secondMax = x;
		}
	}
	return [max, secondMax];
};
console.log(getMaxTwo(list));
