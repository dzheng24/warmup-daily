const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}

function plusSeven(arr) {
  let result = arr.map(number => number + 7);
  console.log(result);
}

function fizz(arr) {
  let result = arr.filter(number => number % 3 === 0);
  console.log(result);
}

function sumOfEveryNumberSquared(arr) {
  let result = arr.reduce((a, b) => (a + b * b));
  console.log(result);
}
