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

////////////////////////////////////////////////////////////////////

//   ARRS2MAP

// Given two arrays, create an associative array (map) containing keys 
// of the first, and values of the second. For 
// arr1 = ["abc", 3, "yo"] and 
// arr2 = [42, "wassup", true], 
// return {"abc": 42, 3: "wassup", "yo": true}.

// for loop that goes from left to right in arr1
// nested for loop that goes from left to right in arr2
// have object, taking the index of position arr1 (which will be the key),
// and have that equal to position in arr2

var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];

var obj = {};

for (var i = 0; i < arr1.length; i++){
  for (var j = 0; j < arr2.length; j++){
    obj[arr1[i]] = arr2[i];
  }
}

console.log(obj);

// [object Object] {
// 	3: "wassup",
// 	abc: 42,
// 	yo: true
//   }


////////////////////////////////////////////////////////////////////

// INVERT HASH
// Create invertHash(assocArr) that converts a hash’s keys to values 
// and values to corresponding keys. 
// Example: 
// Given {"name": "Zaphod", "numHeads": 2}, 
// Return {"Zaphod": "name", 2: "numHeads"}. 
// You will need to learn and use a JavaScript for ... in here!

var obj = {"name": "Zaphod", "numHeads": 2};
var obj2 = {};

for (key in obj) {
  console.log("key is: " + key);
  console.log("obj[key] is: " + obj[key]);
  
  temp = obj[key]; 
  console.log("temp is: " + temp);
  
  obj2[temp] = key;
  
}

console.log(obj2);

////////////////////////////////////////////////////////////////////

// JOIN2
// Create join2(arr) that given an array of strings, return a string 
// with all array strings combined.
// Given [‘a’,’b’,’c’], return ‘abc’.

// for loop that takes each index and pushes to new variable


var arr1 = ['a', 'b', 'c'];
var arr2 = '';

for (var i = 0; i < arr1.length; i++){
  arr2 += arr1[i];
}

console.log(arr2);

////////////////////////////////////////////////////////////////////

// SPLIT2
// Create split2(str) that splits a string into individual strings 
// and returns them in an array. 
// Given ‘abc’ return [‘a’,’b’,’c’].

var arr1 = 'abc';
var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}

console.log(arr2);

////////////////////////////////////////////////////////////////////

// REVERSESTRING
// Implement a function reverseString(str) that, given a string, 
// will return the string of the same length but with characters reversed. 
// Example: given "creature", return "erutaerc". 
// Do not use the built-in reverse() function! 

function reverseString(str){
	var str2 = '';
	for (var i = str.length - 1; i >= 0; i--){
	  str2 += str[i];
	}
	return str2;
  }
  
  console.log(reverseString("creature"));

////////////////////////////////////////////////////////////////////

// .SPLIT3
// Create split3(str, mark) that given a string and a mark, 
// split the string at the mark and return an array with the split strings. 
// Given (‘aa bb cc’, ‘ ’), return [‘aa’,’bb’,’cc’]
// Given (‘aa bb cc’, ‘bb’), return [‘aa ’,’ cc’]
// Given (‘aa bb cc bb dd’, ‘bb’), return [‘aa ’,’ cc ’, ‘ dd’]

////////////////////////////////////////////////////////////////////

// PARENS VALID
// Create a function that, given an input string, returns a boolean whether 
// parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true.
//  Given "n(0(p)3", return false. Given "n)0(t(0)k", return false. 

function parens(str){
  
	var temp = [];
	
	for (var i = 0; i < str.length; i++){
	  if (str[i] == "(") {
		temp.push("(");
	  }
	  if (str[i] == ")"){
		if (temp.length === 0) {
		  return false;
		} else {
		  temp.pop();
		}
	  }
	}
	if (temp.length === 0){
	  return true;
	} else {
	  return false;
	}
	
  };
  
  console.log(parens("y(3(p)p(3)r)s"));


////////////////////////////////////////////////////////////////////

// BRACES VALID
// Given a string, returns whether the sequence of various parentheses, 
// braces and brackets within it are valid. For example, given the input string 
// "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. 
// Given "a(1)s[O(n]0{t)0}k", return false. 

function parens(str){
  
	var temp = [];
  
	for (var i = 0; i < str.length; i++){
	  
	  if (str[i] == "(" || str[i] == "{" || str[i] == "["){
		temp.push(str[i]);
	  }
	  if (str[i] == ")" || str[i] == "}" || str[i] == "]"){
		
		if (str[i]== ")"){
		  if (temp[temp.length-1] == "("){
			temp.pop();
		  } else {
			return false;
		  }
		}
		
		if (str[i]== "}"){
		  if (temp[temp.length-1] == "{"){
			temp.pop();
		  } else {
			return false;
		  }
		}
		if (str[i]== "]"){
		  if (temp[temp.length-1] == "["){
			temp.pop();
		  } else {
			return false;
		  }
		}  
	  }
	}
	
	if (temp.length === 0) {
	  return true;
	} else {
	  return false;
	}
	
  };
  
  console.log(parens("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"));



////////////////////////////////////////////////////////////////////

// IS PALINDROME
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" 
// could be considered palindromes, because (if we ignore spaces, 
// 	punctuation and capitalization) the letters are the same from front and back. 

// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and 
// capitalization: if given "Dud" or "oho!", return false.
// > Do not use reverse. 

function palindrome(str){
  
	for (var i = 0; i < Math.floor(str.length/2); i++){
	  if (str[i] == str[str.length - 1 - i]){
		return true;
	  } else {
		return false;
	  }
	}
  }
  
  console.log(palindrome("oho!"));

  ////////////////////////////////////////////////////////////////////

// LONGEST PALINDROME
// For this challenge, we will look not only at the entire string, 
// but also substrings within it. 

// For a string, return the longest palindromic substring. 
// Given "what up, dada?", return "dad". Given "not much", return "n". 
// Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): 
// given "My favorite racecar e ded rupted!", return "e racecar e".
// > Find the strict palindrome.

// go through every index of string
// check whether index - 1 matches index + 1
// if it does, then push into new string


//unfinished
function longestPalindrome(str){
	var str1 = "";
  
	for (var i = 0; i < str.length; i++){
	  
	  for (var j = 1; j < str.length; j++){
		
		if (str[i-j] == str[i+j]){
		  str1 += str[j];
		  
		}
		
	  }
	  
	}
	
	return str1;
  }
  
  console.log(longestPalindrome("a racecar"));

////////////////////////////////////////////////////////////////////
//   SINGLY LINKED LISTS
////////////////////////////////////////////////////////////////////

//   addFront
// Given a pointer to the first node in a list, and a value, create a new node, 
// connect it to the head of the list, and return a pointer to the list’s new head node.


var node2 = { val: 2, next: null };

function addFront(node){
  node2.next = node;
  var head = node2;
  return head;
}

console.log(addFront({ val: 1, next: null }))

////////////////////////////////////////////////////////////////////

// removeFront
// Given a pointer to the first node in a list, remove the head node and 
// return the new list. If list is empty, return null.

function removeFront(node){

	var head = node.next;
	
	if (!head){
	  return null;
	}
	
	return head;
	
  }
  
  console.log(removeFront({ val: 1, next: { val: 2, next: null } }))

////////////////////////////////////////////////////////////////////

// contains
// Given a pointer to a listNode and a value, return whether value is
// found in any node within the list.

function contains(node, x){
	while (node){
	  if (node.val == x){
		return true;
	  } 
	  node = node.next;
	}
	return false;
  }
  
  console.log(contains({ val: 1, next: { val: 2, next: null } }, 3))

////////////////////////////////////////////////////////////////////

// front
// Return the value (not the node) at the head of the list. 
// If list is empty, return null.

function front(node){
	if (!node){
	  return false;
	}
	return node.val;
  }
  
  console.log(front({ val: 9, next: { val: 2, next: null } }))