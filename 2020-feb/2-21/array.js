const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

function makeEven(arr) {
  let result = arr.map(x => x * 2);
  return result;
}

// console.log(makeEven(numbers));

function oddNumbersOnly(arr) {
  let result = arr.filter(x => {
    return x % 2 !== 0;
  })
  return result;
}

// console.log(oddNumbersOnly(numbers));

function totalProduct(arr) {
  let result = arr.reduce((a, b) => {
    return a * b
  })
  return result;
}

console.log(totalProduct(numbers));
