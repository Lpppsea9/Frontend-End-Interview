const myInstacneof = function (example, classFunc) {
	let proto = Object.getPrototypeOf(example);
	while (true) {
		if (!proto) return false;
		if (proto === classFunc.prototype) return true;
		proto = Object.getPrototypeOf(proto);
	}
};

console.log(myInstacneof([], Array));
