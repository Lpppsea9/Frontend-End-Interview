import patch from "./dom/patch";
import h from "./dom/h";

const node1 = document.getElementById("container");
const btnDom = document.getElementById("btn");

let vnode1 = h("h1", {}, "你好1");

let vnode2 = h("ul", {}, [
	h("li", {}, "a"),
	h("li", {}, "a"),
	h("li", {}, "a"),
	h("li", {}, "a"),
]);

let vnode3 = h("div", {}, [
	h("span", {}, "a"),
	h("span", {}, "b"),
	h("span", {}, "c"),
	h("span", {}, "d"),
]);

let vnodeC3 = h("div", {}, [
	h("span", {}, "a"),
	h("span", {}, "b"),
	h("span", {}, "c"),
	h("span", {}, "d"),
]);

let vnodeDemo5 = h("div", {}, [
	h("span", {}, "b"),
	h("span", {}, "c"),
	h("span", {}, "a"),
	h("span", {}, "d"),
	h("span", {}, "m"),
]);

let vnode4 = h("div", {}, [
	h("span", {}, "d"),
	h("span", {}, "e"),
	h("span", {}, "f"),
]);

// 测试节点
let vnodeUl1 = h("ul", {}, [
	h("li", { key: "a" }, "a"),
	h("li", { key: "b" }, "b"),
	h("li", { key: "c" }, "c"),
	h("li", { key: "d" }, "d"),
]);

let vnodeUl2 = h("ul", {}, [
	h("li", { key: "d" }, "d"),
	h("li", { key: "c" }, "c"),
	h("li", { key: "b" }, "b"),
	h("li", { key: "a" }, "a"),
]);

patch(node1, vnodeUl1);
btnDom.onclick = () => {
	patch(vnodeUl1, vnodeUl2);
};

// console.log("node1", node1);
// console.log("vnode1", vnode1);
// console.log("vnode2", vnode2);
