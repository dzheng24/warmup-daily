const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// forLoop(numbers);

function whileLoop(arr) {
  let count = 0;
  while (count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}

// whileLoop(numbers);

function plusOne(arr) {
  let result = arr.map(number => number + 1);
  return result;
}

// console.log(plusOne(numbers));

function evenNumbersOnly(arr) {
  let result = arr.filter(number => number % 2 === 0);
  return result;
}

// console.log(evenNumbersOnly(numbers));

function totalSum(arr) {
  let result = arr.reduce((a, b) => a + b);
  return result;
}

console.log(totalSum(numbers));

