import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";

export default function (oldVnode, newVnode) {
	if (oldVnode.sel == undefined) {
		// 旧节点不是vnode类型，要先转化成vnode
		oldVnode = vnode(
			oldVnode.tagName.toLowerCase(), //sel
			{},
			[],
			undefined,
			oldVnode
		);
	}
	if (oldVnode.sel === newVnode.sel) {
		// 如果新旧节点的节点名称相同，分开情况判断
		patchVnode(oldVnode, newVnode);
	} else {
		// 如果新旧节点的节点名称不同，则暴力删除旧节点，插入新节点
		// 把新的虚拟节点创建为真实的dom节点
		let newNodeElm = createElement(newVnode);
		// 获取旧的虚拟节点 .elm 就是真正节点
		let oldNodeElm = oldVnode.elm;
		// 创建新节点
		if (newNodeElm) {
			oldNodeElm.parentNode.insertBefore(newNodeElm, oldNodeElm);
		}
		// 删除旧节点
		oldNodeElm.parentNode.removeChild(oldNodeElm);
	}
}
