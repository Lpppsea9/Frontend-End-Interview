import patchVnode from "./patchVnode";

const sameVnode = (oldVnode, newVnode) => {
	// console.log(oldVnode, newVnode);
	return oldVnode.key == newVnode.key;
};

export default function updateChildren(oldNodeElm, oldCh, newCh) {
	console.log(oldNodeElm, oldCh, newCh);
	let oldStartIdx = 0;
	let oldEndIdx = oldCh.length - 1;
	let newStartIdx = 0;
	let newEndIdx = newCh.length - 1;

	let oldStartVnode = oldCh[oldStartIdx];
	let oldEndVnode = oldCh[oldEndIdx];
	let newStartVnode = newCh[newStartIdx];
	let newEndVnode = newCh[newEndIdx];

	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (sameVnode(oldStartVnode, newStartVnode)) {
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
			oldNodeElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
			oldStartVnode = oldCh[++oldStartIdx];
			newEndVnode = newCh[--newEndIdx];
		} else if (sameVnode(oldEndVnode, newStartVnode)) {
			// 旧后 新前
			console.log("4");
			patchVnode(oldEndVnode, newStartVnode);
			if (newStartVnode) newStartVnode.elm = oldEndVnode.elem;
			oldNodeElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
			oldEndVnode = oldCh[--oldEndIdx];
			newStartVnode = newCh[++newStartIdx];
		} else {
			// 第五种情况
		}
	}
}
