// 实现平铺数据转树形结构
const flatArr = [
	{
		name: "上海",
		pId: "0",
		id: "1",
	},
	{
		name: "嘉定",
		pId: "1",
		id: "1-1",
	},
	{
		name: "徐汇",
		pId: "1",
		id: "1-2",
	},
	{
		name: "爱好",
		pId: "0",
		id: "2",
	},
	{
		name: "跑步",
		pId: "2",
		id: "2-1",
	},
	{
		name: "游泳",
		pId: "2",
		id: "2-2",
	},
];

/* 普通递归 */
// const arrayToTree = (arr, res, pId) => {
// 	for (const i in arr) {
// 		if (arr[i].pId === pId) {
// 			const childItem = {
// 				...arr[i],
// 				children: [],
// 			};

// 			arrayToTree(arr, childItem.children, childItem.id);

// 			if (childItem.children.length <= 0) {
// 				delete childItem.children;
// 			}
// 			res.push(childItem);
// 		}
// 	}
// 	return res;
// };

// const treeRes = [];
// arrayToTree(flatArr, treeRes, "0");
// console.log(treeRes);

/* reduce递归 */
// const arrayToTree = (arr, pid) => {
// 	return arr.reduce((res, current) => {
// 		if (current.pId === pid) {
// 			current.children = arrayToTree(arr, current.id);
// 			return res.concat(current);
// 		}
// 		return res;
// 	}, []);
// };

// console.log(arrayToTree(flatArr, "0"));

/* map+遍历 */
// const arrayToTree = (arr) => {
// 	const mapObj = {};
// 	arr.forEach((item) => {
// 		mapObj[item.id] = item;
// 	});
// 	const res = [];
// 	for (const key in arr) {
// 		const item = arr[key];
// 		const parent = mapObj[item.pId];
// 		if (parent) {
// 			if (parent.children) {
// 				parent.children.push(item);
// 			} else {
// 				parent.children = [];
// 				parent.children.push(item);
// 			}
// 		} else {
// 			res.push(item);
// 		}
// 	}
// 	console.log(res);
// };

// arrayToTree(flatArr);
