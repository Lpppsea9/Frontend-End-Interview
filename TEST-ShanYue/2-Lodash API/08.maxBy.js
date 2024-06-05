// 实现一个函数 maxBy，根据给定条件找到最大的数组项

const data = [{ value: 6 }, { value: 2 }, { value: 4 }];

//=> { value: 6 }
// maxBy(data, (x) => x.value);
// 面试追问:

// 如果最大的项有多个，则多个都返回，如下所示
// const data2 = [{ value: 6 }, { value: 2 }, { value: 4 }, { value: 6 }];
const data2 = [
	{ value: 2 },
	{ value: 2 },
	{ value: 7 },
	{ value: 7 },
	{ value: 7 },
];

/* 最大项存在一个 */
const maxBy = (list, fn) => {
	return list.reduce((pre, cur) => (fn(pre) > fn(cur) ? pre : cur));
};

/* 最大项存在多个 */
const maxBy2 = (list, fn) => {
	return list.slice(1).reduce(
		(acc, cur) => {
			console.log(acc[0]);
			if (fn(cur) > fn(acc[0])) {
				return [cur];
			}
			if (fn(cur) === fn(acc[0])) {
				return [...acc, cur];
			}
			return acc;
		},
		[list[0]]
	);
};

// console.log(maxBy(data, (x) => x.value));

console.log(maxBy2(data2, (x) => x.value));
