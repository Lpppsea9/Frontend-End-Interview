import createElement from "./createElement";
import updateChildren from "./updateChildren";

export default function patchVnode(oldVnode, newVnode) {
	// 新的虚拟节点不存在子节点，则证明新的虚拟节点是文本节点
	if (newVnode.children == undefined) {
		if (newVnode.text !== oldVnode.elm.innerHTML) {
			oldVnode.elm.innerHTML = newVnode.text;
		}
	} else {
		//新的虚拟节点存在子节点
		if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
			// 新旧虚拟节点都存在子节点,最复杂的情况
			// console.log("最复杂的情况新旧节点都存在children");
			updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
		} else {
			// 旧虚拟节点不存在子节点
			oldVnode.elm.innerHTML = "";
			for (let child of newVnode.children) {
				const childDom = createElement(child);
				oldVnode.elm.appendChild(childDom);
			}
		}
	}
}
