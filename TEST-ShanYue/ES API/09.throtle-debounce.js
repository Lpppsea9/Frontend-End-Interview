// 防抖
function debounce(fn, delay) {
	let timer = null;
	return function () {
		const _self = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.apply(_self, args);
		}, delay);
	};
}

// 节流
function throttle(fn, delay) {
	let timer = null;
	return function () {
		const _self = this;
		const args = arguments;
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn.apply(_self, args);
			timer = null;
		}, delay);
	};
}

window.addEventListener(
	"resize",
	debounce((e) => {
		console.log("debounce");
	}, 500)
);
