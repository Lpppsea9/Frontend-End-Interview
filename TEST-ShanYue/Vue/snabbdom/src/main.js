import h from "./h";

console.log("2");
const oldV = h("div", {}, "你好呀");
const newV = h("ul", {}, [
	h("li", {}, "a"),
	h("li", {}, "b"),
	h("li", {}, "c"),
	h("li", {}, "sea"),
]);
