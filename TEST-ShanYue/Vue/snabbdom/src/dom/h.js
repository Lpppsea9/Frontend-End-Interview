import vnode from "./vnode";
export default function h(sel, data, params) {
	if (typeof params === "string") {
		// 第三个参数为字符串类型，说明第三个元素没有子节点
		return vnode(sel, data, undefined, params, undefined);
	} else if (Array.isArray(params)) {
		const children = [];
		for (const child of params) {
			children.push(child);
		}
		return vnode(sel, data, children, undefined, undefined);
	}
}
