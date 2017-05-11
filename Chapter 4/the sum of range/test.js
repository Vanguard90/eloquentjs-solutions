let start = 1;
let end = 10;
let step = 1;

let arr = [];

function range (start,end, step) {

if (step === null || step === undefined) {
	step = 1;
}

if (step < 0) {
	step = Math.abs(step);
}

for (var i = start; i <= end; i++) {

	arr.push(i);

	if (step !== 1 && i % step === 0) {
		let index = arr.indexOf(i);
		arr.splice(index,1);
	}
}

console.log(arr);
}
range(start, end, step);

let total = 0;

function sum(arr) {

for (var i = 0; i < arr.length; i++) {
	total += arr[i];
}
console.log(total);
}

sum(arr);

/* Everything complete */