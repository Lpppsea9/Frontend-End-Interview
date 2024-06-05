// Output: {
//   "1": {
//     "id": 1,
//     "name": "山月"
//   },
//   "2": {
//     "id": 2,
//     "name": "shanyue"
//   }
// }
// keyBy(
// 	[
// 		{ id: 1, name: "山月" },
// 		{ id: 2, name: "shanyue" },
// 	],
// 	(x) => x.id
// );

function keyBy(arr, fn) {
	return arr.reduce((acc, cur) => {
		const key = fn(cur);
		acc[key] = cur;
		return acc;
	}, {});
}

console.log(
	keyBy(
		[
			{ id: 1, name: "山月" },
			{ id: 2, name: "shanyue" },
		],
		(x) => x.id
	)
);
