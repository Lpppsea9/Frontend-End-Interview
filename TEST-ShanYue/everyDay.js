// 今日目标 cloneDeep isEqual get

function get(source, path, defaultValue = undefined) {
	// a[3].b -> a.3.b -> [a, 3, b]
	const paths = path
		.replace(/\[(\w+)\]/g, ".$1")
		.replace(/\["(\w+)"\]/g, ".$1")
		.replace(/\['(\w+)'\]/g, ".$1")
		.split(".");
	let result = source;
	for (const p of paths) {
		result = result?.[p];
	}
	return result === undefined ? defaultValue : result;
}

const object = { a: [{ b: { c: 3 } }] };

//=> 3
// const a = get(object, "a[0].b.c");

// //=> 3
// const b = get(object, 'a[0]["b"]["c"]');

// //=> 10086
// const c = get(object, "a[100].b.c", 10086);

// console.log(a, b, c);

const a = "a[0].b.c";
console.log(a.replace(/\[(\w+)\]/g, ".$1"));
