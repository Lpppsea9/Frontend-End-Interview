// 实现防抖
const inputDom = document.getElementById("inputDom");
inputDom.addEventListener(
	"keyup",
	debounce((e) => {
		console.log(e.target.value);
	}, 1000)
);
/* 

*/

function debounce(fn, delay) {
	let timer = null;
	return function () {
		const _this = this;
		const args = [...arguments];
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.apply(_this, args);
		}, delay);
	};
}

function throttle(fn, delay) {
	let timer = null;
	return function () {
		const _this = this;
		const args = [...arguments];
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn.apply(_this, args);
			timer = null;
		}, delay);
	};
}

const divDom = document.getElementById("div1");
divDom.addEventListener(
	"mousemove",
	throttle((e) => {
		console.log(e.clientX);
	}, 500)
);
