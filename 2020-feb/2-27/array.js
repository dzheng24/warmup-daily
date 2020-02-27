// 2/27/20 Thursday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0 ; i < arr.length; i++) {
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
    result.push(callback(arr[i]))
  }
  return result;
}

const plusOne = map(numbers, (x => x + 1));

function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

const evenNumbers = filter(numbers, (x => x % 2 === 0));

function totalSum(arr) {
  let result = arr.reduce((a, b) => {
    return a + b
  })
  return result;
}

console.log(totalSum(numbers));
