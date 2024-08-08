export default function createElement(vnode) {
	let domNode = document.createElement(vnode.sel);
	if (!vnode.children) {
		domNode.innerHTML = vnode.text;
	} else {
		for (const child of vnode.children) {
			let childNode = createElement(child);
			domNode.appendChild(childNode);
		}
	}
	vnode.elm = domNode;
	return domNode;
}
