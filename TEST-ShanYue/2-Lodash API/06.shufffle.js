// 如何实现一个数组洗牌函数 shuffle

// 打乱数组，有可能是 [1, 3, 2, 4]，但对原数组没有影响
// shuffle([1, 2, 3, 4]);
// <1>不用 sort
// <2>使用 sort 简易
const arr1 = [1, 2, 3, 4];
function shuffle(list) {
	const len = list.length;
	let result = [...list];
	for (let i = len - 1; i > 0; i--) {
		const swapIndex = Math.floor(Math.random() * (i + 1));
		[result[i], result[swapIndex]] = [result[swapIndex], result[i]];
	}
	return result;
}

const shuffleEasy = (list) => list.sort((x, y) => Math.random() - 0.5);

console.log("不用 sort ——————>", shuffle(arr1));
console.log("使用 sort ——————>", shuffleEasy(arr1));
