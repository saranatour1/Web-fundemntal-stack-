//1-Function to return yummy or food, select the code block and use ctr+alt+A to uncomment
function alwaysHungry(arr) {
  // your code here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
    } else {
      console.log("I'm hungry");
    }
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
//2-function toreturn highest
function highPass(arr, cutoff) {
  var filteredArr = [];
  // your code here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
//3-function to return the better values
function betterThanAverage(arr) {
  var sum = 0;
  var count = 0;

  // calculate the average
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (avg < arr[i]) {
      count++;
    }
  }
  return count;
}
// return count;
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//4- //function to reverse the array
function reverse(arr) {
  var copyarr = [];
  var index = 0;
  var i = arr.length - 1;
  while (index < arr.length && i >= 0) {
    copyarr[index] = arr[i];
    index++;
    i--;
  }
  // your code here
  return copyarr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//fibonachi array
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  for (var i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  // your code here
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
