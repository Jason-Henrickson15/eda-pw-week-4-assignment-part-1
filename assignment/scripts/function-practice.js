console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jason'));

// 3. Function to add two numbers together & return the result
function addNumbers(num1, num2) {
  // return firstNumber + secondNumber;
  return num1 + num2;
}
console.log(addNumbers(10,5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1*num2*num3;
}
console.log(multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 || number % 2 === 0 && number != 0){
    return true;
  }
  else {
    return false;
  }
}


// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0){
    return array[array.length-1];
  }
  else if (array.length === 0){
    return 'undefined';
  }
}

let array = [1,2,3,4,5]
console.log(`The last item in the array is ${getLast(array)}.`)
let array1 = []
console.log(`The last item in the array is ${getLast(array1)}.`)

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let i = 0
  for (item of array){
    if (item === value){
      i++
    }
  }
  if (i>0){
    return true;
  }
  else {
    return false;
  }
}
let arr = [1,2,3]
console.log(find(1,arr))
console.log(find(5,arr))



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let strArray = string.split("")
  if (strArray[0] === letter){
    return true;
  }
  else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (num of array){
    sum += num
  }
  return sum;
}
let numArray = [1,2,3]
console.log(sumAll(numArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function findPosNums(array){
  let newArray = []
  for (num of array){
    if (num % 2 === 0){
      newArray.push(num)
    }
  }
  return newArray;
}
let posArray = [1,2,3,4,5,6,7,8,9,10]
console.log(findPosNums(posArray))



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// Problem: Create a function that takes the dimensions of two triangles
// (as arrays) and checks if the first triangle fits into the second one.

// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
//
// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
//
// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
//
// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.

// This function took me forever to get to work for all posibilities

let tri1 = [1,2,3];
let tri2 = [1,2,3];
let tri3 = [1,2,4];
let tri4 = [1,1,1];
let tri5 = [2,2,2];

function doesTriangleFit(triangle1,triangle2){
  same = 0
  diffArray = []
  for (i=0;i<3;i++){
    if (triangle1[i]===triangle2[i]){
      same++;
    }
    if (triangle1[i]<=triangle2[i]){
      diff = triangle2[i]-triangle1[i];
      if (diffArray.indexOf(diff)=== -1){
        diffArray.push(diff);
      }
    }
  }
  if (same===3){
    return true;
  }
  else if (diffArray.length===1){
    return true;
  }
  else{
    return false;
  }
}

console.log("This should return 'true':",doesTriangleFit(tri1,tri2));
console.log("This should return 'false':",doesTriangleFit(tri1, tri3));
console.log("This should return 'true':", doesTriangleFit(tri4,tri5));
console.log("This should return 'false':",doesTriangleFit(tri5,tri4));
