//=> ['a', 6]
getFrequentChar("aaabbaaacc");

//=> ['a', 3]
getFrequentChar("aaa");

function getFrequentChar(str) {
	const dict = {};
	let maxChar = ["", 0];
	for (const char of str) {
		dict[char] = (dict[char] || 0) + 1;
		if (dict[char] > maxChar[1]) {
			maxChar = [char, dict[char]];
		}
	}
	return maxChar;
}

console.log(getFrequentChar("aaabbaaacc"));
console.log(getFrequentChar("aaa"));
