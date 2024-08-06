import h from "./dom/h";
let vnode1 = h("div", {}, "你好1");

let vnode2 = h("ul", {}, [
	h("li", {}, "a"),
	h("li", {}, "a"),
	h("li", {}, "a"),
	h("li", {}, "a"),
]);
