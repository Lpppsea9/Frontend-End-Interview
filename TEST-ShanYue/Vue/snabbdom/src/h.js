export default function h(sel, data, params) {
	if (typeof params === "string") {
		return vNode(sel);
	}
}
