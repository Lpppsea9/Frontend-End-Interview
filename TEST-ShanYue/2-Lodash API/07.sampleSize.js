// 如何实现一个 sampleSize 函数，从数组中随机取N个元素

const arr = [1, 2, 3, 4];
const sampleSize = (list, num) =>
	list.sort((x, y) => Math.random() - 0.5).slice(0, num);

console.log(sampleSize(arr));
