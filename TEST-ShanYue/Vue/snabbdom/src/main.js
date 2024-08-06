import {
	init,
	classModule,
	propsModule,
	styleModule,
	eventListenersModule,
	h,
} from "snabbdom";

// patch函数是通过init方法生成的
const patch = init([
	// 通过传入模块初始化 patch 函数
	classModule, // 开启 classes 功能
	propsModule, // 支持传入 props
	styleModule, // 支持内联样式同时支持动画
	eventListenersModule, // 添加事件监听
]);

const container = document.getElementById("container");

const vnode = h(
	"div#container.two.classes",
	{ on: { click: function () {} } },
	[
		h("span", { style: { fontWeight: "bold" } }, "This is bold"),
		" and this is just normal text",
		h("a", { props: { href: "/foo" } }, "I'll take you places!"),
	]
);
// 传入一个空的元素节点 - 将产生副作用（修改该节点）
patch(container, vnode);

const newVnode = h(
	"div#container.two.classes",
	{ on: { click: function () {} } },
	[
		h(
			"span",
			{ style: { fontWeight: "normal", fontStyle: "italic" } },
			"This is now italic type"
		),
		" and this is still just normal text",
		h("a", { props: { href: "/bar" } }, "I'll take you places!"),
	]
);
// 再次调用 `patch`
patch(vnode, newVnode); // 将旧节点更新为新节点

/**
 * 测试
 */

// 一个vnode有哪些属性？
/* 
children 子节点
data 属性对象
elm 真实dom
key 
sel 节点名称
text 文本值
*/
const myVnode1 = h(
	"a",
	{
		props: {
			href: "kkkk.com",
			target: "_blank",
		},
	},
	"文本不"
);
const myVnode2 = h("div", "我是一个盒子");
const myVnode3 = h("ul", [
	h("li", {}, "苹果"),
	h("li", "香蕉"),
	h("li", [h("div", [h("li", "嘻嘻"), h("li", "哈哈")])]),
]);
const btn = document.getElementById("btn");
console.log(myVnode1);
console.log(myVnode2);

const vnode1 = h("ul", [
	h("li", { key: "a" }, "a"),
	h("li", { key: "b" }, "b"),
	h("li", { key: "c" }, "c"),
]);
const vnode2 = h("ul", [
	h("li", { key: "b" }, "b"),
	h("li", { key: "c" }, "c"),
	h("li", { key: "a" }, "a"),
]);

btn.onclick = function () {
	patch(vnode1, vnode2);
};

patch(container, vnode1);
