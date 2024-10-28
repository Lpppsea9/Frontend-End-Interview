/* 1.实现防抖
  防抖顾名思义防止抖动，如果有一个输入框有输入自动搜索的功能
  但是不能在输入的时候不停的去触发搜索，这样会造成卡顿，可以使用防抖来实现用户停止输入的时候，以500ms为例，隔500ms进行搜索 
*/

const inputDom = document.getElementById("inputDom");
const divDom = document.getElementById("divDom");

const inputEvent = (event) => {
	console.log(event.target.value);
};
inputDom.addEventListener("keydown", debounce(inputEvent, 1000));

function debounce(fn, delay) {
	let timer = null;
	return function () {
		const _self = this;
		const args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.apply(_self, args);
		}, delay);
	};
}

const divEvent = (e) => {
	console.log({ offsetX: e.offsetX, offsetY: e.offsetY });
};
divDom.addEventListener("mousemove", throttle(divEvent, 500));

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
