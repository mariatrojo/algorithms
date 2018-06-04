// Print 1 - 255
for (var i = 1; i <= 255; i++) {
	console.log(i);
}

// Print all the odd numbers from 1 to 1000
for (var i = 1; i <= 1000; i++) {
	if (i % 2 !== 0) {
	  console.log(i);
	}
  }

// Print the sum of all the odd numbers from 1 to 5000
var sum = 0;
for (var i = 1; i <= 5000; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

// Given an array X say [1,3,5,7,9,13], 
// write a program that would iterate through each member of the array 
// and print each value on the screen.
function iterate(arr) {
	for (var i = 0; i < arr.length; i++) {
	  console.log(arr[i]);
	}
}
iterate([1,3,5,7,9,13]);

// Given an array with multiple values (e.g. [-3, 3, 5, 7]), 
// write a program that prints the maximum number in the array. 
var x = [-3, 3, 5, 7];
var max = x[0];
for (var i = 1; i < x.length; i++) {
  if(max < x[i]){
    max = x[i];
  }
}
console.log(max);

//Given an array with multiple values (e.g. [1,3,5,7,20]), 
// write a program that prints the average of the values in the array.
var x = [1,3,5,7,20];
var sum = 0;
for(var i = 0; i < x.length; i++) {
  sum += x[i];
}
console.log(sum/x.length);

// Write a program that creates an array 'Y' that 
// contains all the odd numbers between 1 to 255.
var Y = [];
for (var i = 1; i <= 255; i++) {
  if (i % 2 !== 0) {
    Y.push(i);
  }
}
console.log(Y);

// Write a program that takes an array and 
// returns the number of values in that array whose value is greater than y. 
var x = [1,3, 5, 7];
var y = 3;
var counter = 0;
for(var i = 0; i < x.length; i++){
	if (y < x[i]){
		counter++;
	}
}
console.log(counter);

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) 
// that squares each value in the array.
var x = [1,5, 10, -2];
for (var i = 0; i < x.length; i++) {
	x[i] = x[i] * x[i];
}
console.log(x);

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) 
// that replaces any negative number with the value of 0. 
var x = [1,5, 10, -2];
for ( var i = 0; i < x.length; i++ ) {
  if ( x[i] < 0 ) {
    x[i] = 0;
  }
}
console.log(x);

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) 
// that prints the maximum number in the array, minimum value in the array 
// as well as the average values in the array. 
var x = [1,5, 10, -2];
var max = x[0];
var min = x[0];
var sum = x[0];
for (var i = 1; i < x.length; i++) {
  if (max < x[i]){
    max = x[i];
  }
  if (min > x[i]) {
    min = x[i];
  }
  sum += x[i];
}
console.log(max);
console.log(min);
console.log(sum / x.length);

// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) 
// that shifts each number by one (to the front).
//  For example when the program is done x (assuming it was [1,5,10,7,-2]) 
// should become [5,10,7,-2, 0].  

var x = [1,5, 10, 7, -2];
for (var i = 0; i < x.length-1; i++) {
	x[i] = x[i+1];
}
x[x.length-1] = 0;

// Write a program that takes an array of numbers and 
// replaces any number that's negative to a string called 'Dojo'.
var x = [-1, -3, 2];
for (var i = 0; i < x.length; i++){
  if (x[i] < 0){
    x[i] = "Dojo";
  }
}
console.log(x);

// Create an array X and fill the array with 10 values, 
// each value being a random integer between 0 to 100.  
// For example when your program is done, X could be something like this: 
// [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].
var x = [];
for (var i = 1; i <= 10; i++) {
  x.push(Math.floor(Math.random()*101));
}
console.log(x);

// Write a program that takes an array of numbers and 
// returns an array where the first and last numbers in the array 
// have been switched.
var x = [2, 3, 5, 7, 6];
var temp = x[x.length-1];
x[x.length-1] = x[0];
x[0] = temp
console.log(x);

// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), 
// write a program that reverses the values in the array. 
var x = [-3,5,1,3,2,10];
for (var i = 0; i < Math.floor(x.length/2); i++) {
  temp = x[i];
  x[i] = x[x.length - i - 1];
  x[x.length-i-1] = temp;
}
console.log(x);

//INSERT AT
// Write a program that inserts a new number X at an index Y
var arr = [1, 3, 5, 7];
var x = 10;
var y = 2;
arr.push(0);
for (var i = arr.length-1; i > y; i--) {
  arr[i] = arr[i-1];
}
arr[y] = x;
console.log(arr);

// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]),
// write a program that removes any negative values in that array. 
var arr = [0, -1, 2, -3, 4, -5, 6];
var numNegatives = 0;
for (var i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    numNegatives++;
  } else {
    arr[i - numNegatives] = arr[i];
  }
}
for (var j = 1; j <= numNegatives; j++){
  arr.pop();
}
console.log(arr);

//////////////////////////////////////////////////////////////////

//PUSH FRONT

// start loop from back of array
// on index we are on, take the value and store it to the position of index + 1
// decrement loop
// redefine array of 0

var arr = [1, 3, 5, 7];
var x = 10;
for (var i = arr.length; i > 0; i--) {
  arr[i] = arr[i-1];
}
arr[0] = x;
console.log(arr);

//OR//

var arr = [1, 3, 5, 7];
var x = 10;
for (var i = arr.length-1; i >= 0; i--) {
  arr[i+1] = arr[i];
}
arr[0] = x;
console.log(arr);

//////////////////////////////////////////////////////////////////

//POP FRONT

var arr = [1, 3, 5, 7];
for (var i = 0; i <= arr.length-2; i++) {
  arr[i] = arr[i+1];
}
arr.length = arr.length-1;
console.log(arr);

//////////////////////////////////////////////////////////////////

//INSERT AT

var arr = [1, 3, 5, 7];
var x = 10;
var y = 2;
for (var i = arr.length-1; i >= y; i--) {
  arr[i+1] = arr[i];
}
arr[y] = x;
console.log(arr);

//////////////////////////////////////////////////////////////////

//REMOVE AT

var arr = [1, 3, 5, 7];
var y = 2;
for ( var i = y; i < arr.length-1; i++) {
  arr[i] = arr[i+1];
}
arr.length = arr.length-1;
console.log(arr);

//////////////////////////////////////////////////////////////////
//Array: Swap Pairs

function swapPairs(arr){
	for (var i = 0; i < arr.length; i=i+2) {
	  if (arr[i + 1]){
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	  }
	}
	return arr;
  }
  console.log(swapPairs([1,2,3,4,5]));



//////////////////////////////////////////////////////////////////

  //Array: Remove Duplicates

  function removeDupes(arr){
	var counter = 0;
	for (var i = arr.length-1; i > 0; i--){
	  if (arr[i] === arr[i-1]){
		counter++;
		for (var j = i; j < arr.length; j++){
		  arr[j] = arr[j+1];
		}
	  }
	}
	arr.length = arr.length - counter;
	return arr;
  }
  console.log(removeDupes([1,1,2,3,3,4,5]));

////////////////////////////////////////////////////////////////////
//Array: Min to Front

function minToFront(arr){
	var min = arr[0]
	for (var i = 1; i < arr.length; i++){
	  if (arr[i] < min) {
		min = arr[i];
	  }
	}
	for (var j = arr.length-1; j > 0; j--){
	  arr[j] = arr[j-1];
	}
	arr[0] = min;
	return arr;
  }
  console.log(minToFront([3,4,5,1]));

////////////////////////////////////////////////////////////////////
  // Array: Reverse

  function reverse(arr){
	for(var i = 0; i < Math.floor(arr.length/2); i++){
	  var temp = arr[i];
	  arr[i] = arr[arr.length - 1 - i];
	  arr[arr.length - 1 - i] = temp;
	}
	return arr;
  }
  console.log(reverse([1,2,3,4]));

  ////////////////////////////////////////////////////////////////////
  //Array: Rotate
//   Implement rotateArr(arr, shiftBy) that accepts array and offset. 
//   Shift arr’s values to the right by that amount. 
//   ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
//   Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
//   Don’t use built-in functions. Second: allow negative shiftBy (shift L, not R).
						
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. 
// Fourth: minimize the touches of each element.



function rotate(arr, shiftBy){
	for (var i = 1; i <= shiftBy; i++) {
	  var temp = arr[arr.length-1];
	  for(var j = arr.length - 1; j >= 1; j--){
		arr[j] = arr[j-1];
	  }
	  arr[0]=temp;
	}
	return arr;
  }
  console.log(rotate([1,2,3,4],3));

////////////////////////////////////////////////////////////////////

//   Array: Filter Range
						
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. 
// No built-in array functions.

function filterRange(arr, min, max){
	var counter = 0;
	for (var i = 0; i < arr.length; i++){
	  if ((arr[i] <= min) || (arr[i]>= max)){
		arr[i] = null;
	  }
	}
	for (var j = arr.length-1; j >= 0; j--){
	  if (arr[j] === null){
		counter++;
		for (var k = j; k < arr.length; k++){
		  arr[k] = arr[k+1];
		}
	  }
	}
	arr.length = arr.length - counter;
	return arr;
  }
  console.log(filterRange([1,2,3,4,5],2,5));

////////////////////////////////////////////////////////////////////

//   Array: Concat

// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

//function that accepts two arrays
// for loop that goes through first array, and pushes it into new array
// 2nd for loop, not nexted that goes through second array and pushes it into new array

function concat(arr1, arr2){
	var newArr = [];
	for (var i = 0; i < arr1.length; i++){
	  newArr.push(arr1[i]);
	}
	for (var j = 0; j < arr2.length; j++){
	  newArr.push(arr2[j]);
	}
	return newArr;
  }
  console.log(concat([1,2,3],[4,5,6]));


