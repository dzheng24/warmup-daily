// 2-24-20 Monday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function whileLoop(array) {
  let count = 0;
  while (count < array.length) {
    console.log(array[count]);
    count++;
  }
}

function makeZero(array) {
  let result = array.map(x => {
    return x = 0;
  })
  return result;
}


function evenNumbersOnly(arr) {
  let result = arr.filter(x => {
    return x % 2 === 0;
  })
  return result;
}

function allSum(arr) {
  let result = arr.reduce((a, b) => {
    return a + b;
  })
  return result;
}
