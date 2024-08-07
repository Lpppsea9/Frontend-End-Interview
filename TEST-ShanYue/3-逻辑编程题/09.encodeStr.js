//=> a4b3c2
encode("aaaabbbcc");

//=> a4b3a4
encode("aaaabbbaaaa");

//=> a2b2c2
encode("aabbcc");

function encode(str) {
	const l = [];
	let lastChar = "";
	for (const s of str) {
		let len = l.length;
		let lastChar = l.length > 0 ? l[len - 1][0] : undefined;
		if (lastChar === s) {
			l[len - 1][1]++;
		} else {
			l.push([s, 1]);
		}
	}
	console.log(l.map((x) => x.join("")).join(""));
	// return res;
}

// console.log(encode("aaaabbbcc"));
// console.log(encode("aaaabbbaaaa"));
// console.log(encode("aabbcc"));
