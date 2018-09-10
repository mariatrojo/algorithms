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

// CONSTRUCTORS //

function listNode(value){
	this.val = value;
	this.next = null;
}

function SLList(){
	this.head = null;
}

var node1 = new listNode(1);
var node2 = new listNode(2);
var node3 = new listNode(3);

node1.next = node2;
node2.next = node3;

var list = new SLList();
list.head = node1;

console.log(list);

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


////////////////////////////////////////////////////////////////////

//   length
// Create a function that accepts a pointer to first list node, 
// and returns number of nodes in sList

function length(node){
	var count = 0;
	if (!node){
	  return false;
	}
	while (node){
	  count++;
	  node = node.next;
	}
	return count;
  }
  
  console.log(length({ val: 9, next: { val: 2, next: { val: 3, next: null } } }));

////////////////////////////////////////////////////////////////////

// min

function min(node){
  var minVal = node.val;
  var nextNode = node.next;

  while(node != null){
    if (minVal > node.val){
      minVal = node.val;
    }
    node = node.next;
  }
  return minVal;
}
  
  console.log(min({ val: 21, next: { val: 2, next: { val: 19, next: null } } }));

// max
// Create function min(node) and max(node) to returning 
// smallest and largest values in the list.

function max(node){
	var maxVal = node.val;
	var nextNode = node.next;
  
	while(node != null){
	  if (maxVal < node.val){
		maxVal = node.val;
	  }
	  node = node.next;
	}
	return maxVal;
  }
	
	console.log(max({ val: 21, next: { val: 200, next: { val: 39, next: null } } }));

////////////////////////////////////////////////////////////////////

// average
// Create a standalone function average(node) that returns 
// (…wait for it … ) the average of all values contained in that list.

function avg(node){
	var sum = 0;
	var count = 0;
	while (node != null){
	  sum += node.val;
	  count++;
	  node = node.next;
	}
	return (sum / count);
  }
	
	console.log(avg({ val: 1, next: { val: 1, next: { val: 1, next: null } } }));

////////////////////////////////////////////////////////////////////

// display
// Create display(node) for debugging that returns a string containing 
// all list values. Build what you wish console.log(myList) did!

function display(node){
	var string="";
	while (node != null){
	  string += node.val + " ";
	  node = node.next;
	}
	return string;
  }
	
	console.log(display({ val: 1, next: { val: 1, next: { val: 1, next: null } } }));

////////////////////////////////////////////////////////////////////

// removeNode
// Create removeVal(list,value) that removes from our list 
// the node with the given value. Return the new list. 

function removeNode(head, x){
	if (head.val == x){
	  head = head.next;
	} else {
	  var prev = head;
	  var current = head.next;
	  while (current){
		if (current.val == x){
		  prev.next = current.next;
		}
		prev = current;
		current = prev.next;
	  }
	}
	return head;
  }
	
	console.log(removeNode({ val: 15, next: { val: 1, next: { val: 12, next: null } } }, 12));

////////////////////////////////////////////////////////////////////

// prependNode
// Create prependVal(list,value,before) that inserts a listNode with 
// given value immediately before the node with before(value) (or at end). 
// Return the new list. 
// (1)->(2)->(3)->(4)
// (list, 99, 4)
// (1)->(2)->(3)->(99)->(4)

function prependNode(head, x, y){

	if (head.val == y){
	  x.next = head;
	  head = x;
	} else {
	  var prev = head;
	  var current = head.next;
	  while (current){
		if (current.val == y){
		  x.next = current;
		  prev.next = x;
		}
		prev = current;
		current = prev.next;
	  }
	}
	  
	return head;
  }
	
	console.log(prependNode({ val: 15, next: { val: 16, next: null }}, { val: 99, next: null }, 16));

////////////////////////////////////////////////////////////////////

// appendNode
// Create appendVal(list,value,after) that inserts a new listNode with 
// given value immediately after the node containing after (or at end). Return the new list. 
// (1)->(2)->(3)->(4)
// (list, 99, 4)
// (1)->(2)->(3)->(4)->(99)

function appendNode(head, x, y){

	if (head.val == y){
  
	  x.next = head.next;
	  head.next = x;
	 
	} else {
	  
	  var current = head.next;
	  
	  while (current){
		if (current.val == y){
		  x.next = current.next;
		  current.next = x;
		}
  
		current = current.next;
	  }
	}
	  
	return head;
  }
	
	console.log(appendNode({ val: 15, next: { val: 16, next: null }}, { val: 99, next: null }, 16));

////////////////////////////////////////////////////////////////////

// splitOnVal
// Create splitOnVal(list,num) that, given number, splits a list in two. 
// The latter half of the list should be returned, starting with node 
// containing num. E.g.: splitOnVal(5) for the list (1 >3>5>2>4) will change list to (1>3) 
// and return value will be (5>2>4). 

function splitOnVal(head, x){
	var prev = head;
	var current = head.next;
	var head2;
	
	if (head.val === x){
		return head;
	  
	} else {
	  
	  while (current){
		if (current.val === x){
		  prev.next = null;
		  head2 = current;
		}
		prev = current;
		current = prev.next;
	  }
	}
	return head2;
  }
	
	console.log(splitOnVal({ val: 1, next: { val: 2, next: { val: 3, next: null}}}, 3));

////////////////////////////////////////////////////////////////////

// partition - UNFINISHED
// Create partition(list,value) that locates the first node with that value, 
// and moves all nodes with values less than that value to be earlier, 
// and all nodes with values greater than that value to be later. 
// Otherwise, original order need not be perfectly preserved. 
// (2)(5)(4)(1)(3)(6)
// (2)(1)(3)(4)(5)(6)

// PSEUDOCODE
// value: 3

// run only as many times as the length is

// (2)(5)(4)(1)(3)(6)
// current (2) is less than (3), move it before value and make current = current.next
// and previous node before value, make previous.next point to current
// (5)(4)(1)(2)(3)(6)
// (4)(1)(2)(3)(5)(6)
// (1)(2)(3)(4)(5)(6)
// (2)(1)(3)(4)(5)(6)

function node(value){
	this.val = value;
	this.next = null;
}

function slList(){
	this.head = null;
}

var node1 = new node(2);
var node2 = new node(5);
var node3 = new node(4);
var node4 = new node(1);
var node5 = new node(3);
var node6 = new node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

var list = new slList();
list.head = node1;

function partition(list, x){

	var current = list.head;
	var value;
	var counter = 1;
	var previous;
	var pointer;

	// get node where value exists, and count number of nodes
	while (current && current.next){
		if (current.next.val === x){
			previous = current;
			value = current.next;
		}
		counter++;
		current = current.next;
	}

	current = list.head;
	
	while (current && (counter > 0)){
		if (current.val < x) {

			list.head = current.next;

			current.next = value;
			previous.next = current;
			
		} 
		if (current.val > x) {
			list.head = current.next;

			current.next = value.next;
			value.next = current;

		}

		current = list.head;
		counter--;
		
	}

	return list;
}

console.log(partition(list, 3));

////////////////////////////////////////////////////////////////////

// deleteGivenNode
// Create listNode method removeSelf() to disconnect (remove) itself from 
// linked lists that include it. Note: the node might be the first in a list, 
// and you do NOT have a pointer to the previous node. 
// Also, don’t lose any subsequent nodes pointed to by .next.
// (1)(2)(3)(4)(5)
// { val: 3, next: node4, removeSelf: function(){     } }
// (1)(2)(4)(5)


////////////////////////////////////////////////////////////////////

// DOUBLY LINKED LISTS

// Prepend Value
// Given dList, new value, and existing value, 
// insert new val into dList immediately before existing val. 

function dlNode(value){
	this.val = value;
	this.next = null;
	this.prev = null;
}

function dlList(){
	this.head = null;
	this.tail = null;
}

var node1 = new dlNode(1);
var node2 = new dlNode(2);
var node3 = new dlNode(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

var list = new dlList();
list.head = node1;
list.tail = node3;

///////

var newVal = new dlNode(5);



function prepend(list, newVal, existVal){
	var current = list.head;
	var counter = 0;
	
	while (current){
		if (current.val === existVal){
			newVal.prev = current.prev;
			newVal.next = current;
			current.prev.next = newVal;
			current.prev = newVal;
		}
		current = current.next;
	}
	return list;
}

console.log(prepend(list, newVal, 3));

////////////////////////////////////////////////////////////////////

// Kth To Last Value
// Given k, return the value ‘k’ from a dList’s end. 
// (1)->(2)->(*)->(3) - first to last

function dlNode(value){
	this.val = value;
	this.next = null;
	this.prev = null;
}

function dlList(){
	this.head = null;
	this.tail = null;
}

var node1 = new dlNode(1);
var node2 = new dlNode(2);
var node3 = new dlNode(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

var list = new dlList();
list.head = node1;
list.tail = node3;

function kthToLast(list, value){
	var counter = 1;
	var current = list.tail;

	while (current){
		if (counter === value){
			return current.val;
		}
		current = current.prev;
		counter++;
	}
}

console.log(kthToLast(list, 1));

////////////////////////////////////////////////////////////////////

// *Is Valid dList UNFINISHED
// Determine whether given dList is well-formed and valid: 
// whether next and prev pointers match, etc. 

function dlNode(value){
	this.val = value;
	this.next = null;
	this.prev = null;
}

function dlList(){
	this.head = null;
	this.tail = null;
}

var node1 = new dlNode(1);
var node2 = new dlNode(2);
var node3 = new dlNode(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

var list = new dlList();
list.head = node1;
list.tail = node3;

function isValid(list){
	var current = list.head;
	var next = current.next;
	if (list.head.prev != null || list.tail.next != null){
		return false;
	} 
	while (current.next){
		if (current != next.prev){
			return false;
		}
		current = current.next;
		next = current.next;
	}
	return true;
}

console.log(isValid(list));


////////////////////////////////////////////////////////////////////

// Palindrome
// Determine whether a dList is a palindrome

// first run a counter to find out how long the dll is
// divide that number in 2

// one loop that starts at head
// second loop that starts at tail
// check if they match. if they do, 
// then move one runner up, and a second runner down

function dlNode(value){
	this.val = value;
	this.next = null;
	this.prev = null;
}

function dlList(){
	this.head = null;
	this.tail = null;
}

var node1 = new dlNode(1);
var node2 = new dlNode(2);
var node3 = new dlNode(2);
var node4 = new dlNode(1);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;

var list = new dlList();
list.head = node1;
list.tail = node4;

function dlPalindrome(list){
	var current = list.head;
	var counter = 1;
	var runner1 = list.head;
	var runner2 = list.tail;
	while (current.next){
		counter++;
		current = current.next;
	}
	counter = Math.floor(counter / 2);
	while (counter){
		if (runner1.val != runner2.val){
			return false;
		}
		runner1 = runner1.next;
		runner2 = runner2.prev;
		counter--;
	}
	return true;
}

console.log(dlPalindrome(list));


////////////////////////////////////////////////////////////////////

// *Loop Start
// Given a dList that may contain a loop, return a pointer 
// to the node where the loop begins (or null if no loop).

////////////////////////////////////////////////////////////////////

// Repair
// Combine previous work with a function that fixes errors 
// found by isValid and breaks loops.

////////////////////////////////////////////////////////////////////

// Append Value
// Given dList, new value, and existing value, insert 
// new val into dList immediately after existing val. 

////////////////////////////////////////////////////////////////////

// Delete Middle Node
// Given a node in the middle of a dList, remove it. 


////////////////////////////////////////////////////////////////////

// Reverse
// Create function to reverse nodes in a dList. 

////////////////////////////////////////////////////////////////////

// Partition
// Given dList and partition value, perform a simple partition 
// (no need to return the pivot index). 

////////////////////////////////////////////////////////////////////

// Break Loop
// Given dList that may contain a loop, break the loop while 
// retaining original node order.

////////////////////////////////////////////////////////////////////

// QUEUES
// First in, first out

// SLQueue: Enqueue * Dequeue

function Node(val){
	this.val = val;
	this.next = null;
}

function Queue(){
	this.head = null;
	this.tail = null;
	this.enqueue = function(val){
		var nn = new Node(val);
		// if queue is empty, then head and tail point to same node
		if (this.head === null){
			this.head = nn;
			this.tail = nn;
		} else {
			// connect tail to new node
			this.tail.next = nn;
			// reassign tail to new node
			this.tail = nn;
		}
		return this;
	}
	this.display = function(){
		var current = this.head;
		while(current){
			console.log(current.val);
			current = current.next;
		}
	}
	this.dequeue = function(){
		if(this.head){
			var temp = this.head.val;
			this.head = this.head.next;
			return temp;
		}
		return false;
	}
}

q1 = new Queue();
q1.enqueue(12).enqueue(42).dequeue();

q1.display();

////////////////////////////////////////////////////////////////////
// SLQueue: Front
////////////////////////////////////////////////////////////////////
// SLQueue: Contains
////////////////////////////////////////////////////////////////////
// SLQueue: IsEmpty
////////////////////////////////////////////////////////////////////
// SLQueue: Size
////////////////////////////////////////////////////////////////////
// SLQueue: Compare Queues
////////////////////////////////////////////////////////////////////
// SLQueue: Remove Minimums
////////////////////////////////////////////////////////////////////
// SLQueue: Interleave Queue*
////////////////////////////////////////////////////////////////////

// STACKS
// Last in, first out

// create a node
// do we need to determine if the stack is empty
// connect the new node.next to hwat is currently stored at top
// point the top attribute to my new node

// SLStack: Push
////////////////////////////////////////////////////////////////////
// SLStack: Pop
////////////////////////////////////////////////////////////////////
// SLStack: Top
////////////////////////////////////////////////////////////////////
// SLStack: Contains
////////////////////////////////////////////////////////////////////
// SLStack: IsEmpty
////////////////////////////////////////////////////////////////////
// SLStack: Size
////////////////////////////////////////////////////////////////////
// SLStack: Compare Stacks
////////////////////////////////////////////////////////////////////
