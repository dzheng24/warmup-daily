// 2/26/20

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const whileLoop = arr => {
  while (arr.length) {
    console.log(arr.shift());
  }
}

function map(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]))
  }
  return newArray;
}

const squares = map(numbers, (number => number * number));
console.log({squares});

function filter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const even = filter(numbers, (number => (number % 2) === 0));
console.log({even});

function reduce(arr, callback, result) {
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i)
  }
  return result;
}

let sum = reduce(numbers, (accumulator, current) => {
  accumulator += current;
  return accumulator;
}, 0)
console.log({sum});