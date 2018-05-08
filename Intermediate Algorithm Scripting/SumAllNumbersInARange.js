// Sum All Numbers in a Range
// Challenge: https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

function doMath(a, b) {
  return ((b * (b + 1) - a * (a - 1)) / 2);
}

function sumAll(arr) {
  return arr[0] < arr[1] ? doMath(arr[0], arr[1]) : doMath(arr[1], arr[0]);
}

sumAll([1, 4]);
