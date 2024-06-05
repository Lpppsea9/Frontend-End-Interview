//=> 'fizz'
fizzbuzz(3);

//=> 'buzz'
fizzbuzz(5);

//=> 'fizzbuzz'
fizzbuzz(15);

//=> 7
fizzbuzz(7);

function fizzbuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return "fizzbuzz";
	} else if (num % 3 === 0) {
		return "fizz";
	} else if (num % 5 === 0) {
		return "buzz";
	} else {
		return num;
	}
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(7));
