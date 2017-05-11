let arr = [1,2,3,4,5,6,7,8,9,10];
let reversed = [];

function reverseArray(arr) {

for (var i = 0; i <= arr.length; i++) {
	if (arr.length - i < 0) {break;}
	reversed[i] = arr[arr.length - i];

}
console.log(reversed);
}

reverseArray(arr);