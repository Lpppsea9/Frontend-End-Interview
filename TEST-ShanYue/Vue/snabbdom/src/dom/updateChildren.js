import createElement from "./createElement";
import patchVnode from "./patchVnode";

const sameVnode = (oldVnode, newVnode) => {
	// console.log(oldVnode, newVnode);
	return oldVnode.key == newVnode.key;
};
export default function updateChildren(parentNodeElm, oldCh, newCh) {
	console.log(parentNodeElm, oldCh, newCh);
	let oldStartIdx = 0;
	let oldEndIdx = oldCh.length - 1;
	let newStartIdx = 0;
	let newEndIdx = newCh.length - 1;

	let oldStartVnode = oldCh[oldStartIdx];
	let oldEndVnode = oldCh[oldEndIdx];
	let newStartVnode = newCh[newStartIdx];
	let newEndVnode = newCh[newEndIdx];

	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (oldStartVnode == undefined) {
			oldStartVnode = oldCh[++oldStartIdx];
		} else if (oldEndVnode == undefined) {
			oldEndVnode = oldCh[--oldEndIdx];
		} else if (sameVnode(oldStartVnode, newStartVnode)) {
			// 旧前 新前
			console.log("1");
			patchVnode(oldStartVnode, newStartVnode);
			if (newStartVnode) newStartVnode.elm = oldStartVnode.elem;
			oldStartVnode = oldCh[++oldStartIdx];
			newStartVnode = newCh[++newStartIdx];
		} else if (sameVnode(oldEndVnode, newEndVnode)) {
			// 旧后 新后
			console.log("2");
			patchVnode(oldEndVnode, newEndVnode);
			if (newEndVnode) newEndVnode.elm = oldEndVnode.elem;
			oldEndVnode = oldCh[--oldEndIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldStartVnode, newEndVnode)) {
			// 旧前 新后
			console.log("3");
			patchVnode(oldStartVnode, newEndVnode);
			if (newEndVnode) newEndVnode.elm = oldStartVnode.elem;
			parentNodeElm.insertBefore(
				oldStartVnode.elm,
				oldEndVnode.elm.nextSibling
			);
			oldStartVnode = oldCh[++oldStartIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldEndVnode, newStartVnode)) {
			// 旧后 新前
			console.log("4");
			patchVnode(oldEndVnode, newStartVnode);
			if (newStartVnode) newStartVnode.elm = oldEndVnode.elem;
			parentNodeElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
			oldEndVnode = oldCh[--oldEndIdx];
			newStartVnode = newCh[++newStartIdx];
		} else {
			// 第五种情况
			console.log("5");
			const keyMap = {};
			for (let i = oldStartIdx; i <= oldEndIdx; i++) {
				const key = oldCh[i]?.key;
				if (key) keyMap[key] = i;
			}
			// console.log("keyMap", keyMap);
			let idxInOld = keyMap[newStartVnode.key];

			if (idxInOld) {
				// 如果有，说明数据在新旧虚拟节点中都存在
				const elmMove = oldCh[idxInOld];
				patchVnode(elmMove, newStartVnode);
				oldCh[idxInOld] = undefined;
				parentNodeElm.insertBefore(elmMove.elm, oldStartVnode.elm);
			} else {
				// 新节点不存在旧节点要构造新节点
				patchVnode();
				parentNodeElm.insertBefore(
					createElement(newStartVnode),
					oldCh[idxInOld].elm
				);
			}
			newStartVnode = newCh[++newStartIdx];
		}
	}
	// 结束while
	if (oldStartIdx > oldEndIdx) {
		const before = newCh[newEndIdx + 1] ? newCh[newEndIdx + 1].elm : null;
		for (let i = newStartIdx; i <= newEndIdx; i++) {
			parentNodeElm.insertBefore(createElement(newCh[i]), before);
		}
	} else {
		// 进入删除操作
		for (let i = oldStartIdx; i <= oldEndIdx; i++) {
			parentNodeElm.removeChild(oldCh[i].elm);
		}
	}
}
