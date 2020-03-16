// 3/16/20 Monday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  while (arr.length) {
    console.log(arr.shift());
  }
}

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const plusOne = map(numbers, (x => x + 1));

function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
const evensOnly = filter(numbers, (x => x % 2 === 0));

function reduce(arr, callback, result) {
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}
const average = reduce(numbers, (totalValue, currentValue, currentIndex, arr) => {
  totalValue += currentValue;
  if (currentIndex === arr.length - 1) {
    return totalValue / arr.length;
  }
  return totalValue;
}, 0);

//-------------------------------
// Doing something a little different
// Redoing the code challenge yesterday as my warmup 
// Finding the first recurring character in an array 

function firstRecurring(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = true;
    }
  }
  return 'there are no repeats';
}
