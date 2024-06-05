// groupBy(
// 	[
// 		{ id: 1, name: "山月", sex: "male" },
// 		{ id: 2, name: "张三", sex: "female" },
// 		{ id: 3, name: "李四", sex: "female" },
// 	],
// 	(x) => x.sex
// );
// 输出
/* 
{
  "male": [
    { id: 1, name: "山月", sex: "male" }
  ],
  "female": [
    { id: 2, name: "张三", sex: "female" },
		{ id: 3, name: "李四", sex: "female" },
  ]
}
*/

function groupBy(list, fn) {
	return list.reduce((acc, cur) => {
		if (acc[fn(cur)]) {
			acc[fn(cur)].push(cur);
		} else {
			acc[fn(cur)] = [cur];
		}
		return acc;
	}, {});
}
console.log(
	groupBy(
		[
			{ id: 1, name: "山月", sex: "male" },
			{ id: 2, name: "张三", sex: "female" },
			{ id: 3, name: "李四", sex: "female" },
		],
		(x) => x.sex
	)
);
