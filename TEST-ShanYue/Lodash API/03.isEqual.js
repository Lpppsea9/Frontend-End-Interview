const obj1 = {
	name: "ppp",
	arr: [1, 2],
	no: {
		in: "in",
	},
};

const obj2 = {
	name: "ppp",
	arr: [1, 2],
	no: {
		in: "in",
	},
};

console.log(isEqual(obj1, obj2));
function isEqual(x, y) {
	if (x === y) {
		return true;
	} else if (
		typeof x === "object" &&
		x !== null &&
		typeof y === "object" &&
		y !== null
	) {
		const xKeys = Object.keys(x);
		const yKeys = Object.keys(y);
		if (xKeys.length !== yKeys.length) {
			return false;
		}
		for (const key of xKeys) {
			if (!isEqual(x[key], y[key])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
