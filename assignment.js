// Assignment 3: Callback-Based Utility System
// Tasks 1 to 9  (run with: node assignment.js)
 
// ---------- Task 1 ----------
// goes through every element, gives it to the callback
// and stores whatever the callback returns in a new array
// (Task 3 change: if callback returns undefined we skip it, so filtering works)
function processArray(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var value = callback(arr[i]);
    if (value !== undefined) {
      result.push(value);
    }
  }
  return result;
}
 
// Task 1 demo - passing each element to the callback and collecting results
var task1Result = processArray([5, 10, 15], function (n) {
  return n + 1;
});
console.log("Task 1 - each element + 1:", task1Result); // [6, 11, 16]
 
// ---------- Task 2 : square every number ----------
var numbers = [1, 2, 3, 4];
var squared = processArray(numbers, function (n) {
  return n * n;
});
console.log("Task 2 - squares:", squared); // [1, 4, 9, 16]
 
// ---------- Task 3 : only even numbers ----------
var mixed = [1, 2, 3, 4, 5, 6, 7, 8];
var evens = processArray(mixed, function (n) {
  if (n % 2 === 0) {
    return n;
  }
  // odd number -> returns nothing (undefined) so it gets skipped
});
console.log("Task 3 - even numbers:", evens); // [2, 4, 6, 8]
 
// ---------- Task 4 ----------
function processString(str, callback) {
  return callback(str);
}
console.log("Task 4 - processString passes the string to a callback:",
  processString("callbacks are fun", function (str) {
    return str.length + " characters";
  })); // 17 characters
 
// ---------- Task 5 : uppercase ----------
var upper = processString("hello world", function (str) {
  return str.toUpperCase();
});
console.log("Task 5 - uppercase:", upper); // HELLO WORLD
 
// ---------- Task 6 : count words ----------
var wordCount = processString("I am learning callbacks in javascript", function (str) {
  str = str.trim();
  if (str === "") {
    return 0;
  }
  return str.split(/\s+/).length;
});
console.log("Task 6 - word count:", wordCount); // 6
 
// ---------- Task 7 ----------
function calculate(a, b, callback) {
  return callback(a, b);
}
console.log("Task 7 - calculate with a custom callback (a to the power b):",
  calculate(2, 5, function (a, b) {
    return Math.pow(a, b);
  })); // 32
 
// ---------- Task 8 : add, subtract, multiply, divide ----------
var sum = calculate(10, 5, function (a, b) {
  return a + b;
});
var diff = calculate(10, 5, function (a, b) {
  return a - b;
});
var prod = calculate(10, 5, function (a, b) {
  return a * b;
});
var div = calculate(10, 5, function (a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
});
console.log("Task 8 - add:", sum);       // 15
console.log("Task 8 - subtract:", diff); // 5
console.log("Task 8 - multiply:", prod); // 50
console.log("Task 8 - divide:", div);    // 2
 
// ---------- Task 9 ----------
// returns the first element where callback gives true
// if nothing matches then undefined is returned
function findElement(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
 
var firstBig = findElement([3, 8, 12, 5, 20], function (n) {
  return n > 10;
});
console.log("Task 9 - first number > 10:", firstBig); // 12
 
var notFound = findElement([1, 2, 3], function (n) {
  return n > 100;
});
console.log("Task 9 - nothing matches:", notFound); // undefined
 
// ---------- Sample input / output from the question ----------
console.log("---- sample outputs ----");
console.log(processArray([1, 2, 3, 4], function (n) {
  return n * n;
})); // [1, 4, 9, 16]
 
console.log(calculate(10, 5, function (a, b) {
  return a + b;
})); // 15
 
console.log(processString("hello world", function (str) {
  return str.toUpperCase();
})); // "HELLO WORLD"