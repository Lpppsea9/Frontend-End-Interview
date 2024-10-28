const obj1 = {
	name: "kkk",
	like: ["run", "swim"],
	eat: {
		fruits: ["apple", "banana"],
	},
};

const obj2 = {
	name: "kkk",
	like: ["run", "swim"],
	eat: {
		fruits: ["apple", "banana"],
	},
};

console.log(obj1 === obj2);
const isEqual = (obj1, obj2) => {
	if (obj1 === obj2) {
		return true;
	} else if (
		typeof obj1 === "object" &&
		obj1 !== null &&
		typeof obj2 === "object" &&
		obj2 !== null
	) {
		const keys1 = Object.keys(obj1);
		const keys2 = Object.keys(obj2);
		for (const key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				const element = object[key];
			}
		}
	}
};
