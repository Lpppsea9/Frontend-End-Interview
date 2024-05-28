let Parent = function (name, age) {
	this.name = name;
	this.age = age;
	// return {
	// 	like: "run",
	// };
};

const myNew = function (Parent, ...args) {
	const instance = Object.create(Parent.prototype);
	const result = Parent.apply(child, args);
	return typeof result === "object" ? result : instance;
};
