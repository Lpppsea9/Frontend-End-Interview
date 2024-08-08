export default function (sel, data, children, text, elm) {
	// 返回六个参数
	const key = data.key;
	return { sel, data, children, text, elm, key };
}
