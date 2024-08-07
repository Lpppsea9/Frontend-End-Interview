const list = [6, 3, 4, 5];
const getMax = (arr) => {
	if (!arr.length) {
		return 0;
	}
	return arr.reduce((p, c) => {
		console.log("p", p);
		console.log("c", c);
		return c > p ? c : p;
	});
};
console.log(getMax(list));
