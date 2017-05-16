let arr = [1,2,3,4,5,6,7,8,9,10];
let reversed = [];

function reverseArray(arr) {

for (var i = 0; i <= arr.length; i++) {
	if (arr.length - i < 0) {break;}
	reversed[i] = arr[arr.length - i];

}
reversed.shift(0);
console.log(reversed);
}

reverseArray(arr);

/*Book solution

function reverseArray(array) {
  var output = []; 
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

*/
//Just start from the end and send every element to an another array, simpler!

/*Book solution reversing in same array */

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var old = arr[i]; //Assing the element at i to a variable.
    arr[i] = arr[arr.length - 1 - i]; //element at that position is now equal to the element that mirrors it on the other side of the array. So coming from the end here.
    arr[arr.length - 1 - i] = old; //While above change was happening, 'old' element was at at the variable. That's assigned to the "new" mirrored location.
    console.log(arr);
  }
  return arr;
}

reverseArrayInPlace(arr);