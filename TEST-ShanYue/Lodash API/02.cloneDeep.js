const obj1 = {
	name: "sea9",
	age: 111,
	arr1: ["sea", "tree"],
};

function deepClone(obj) {
	if (typeof obj !== "object" || typeof obj == null) {
		return obj;
	}
	const res = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
		}
	}
	return res;
}
const obj2 = deepClone(obj1);
obj2.arr1[0] = "000";
console.log({ ...obj1 });
console.log({ ...obj2 });
