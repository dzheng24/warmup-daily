let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
  }
}

// forLoop(arr);

function whileLoop(array) {
  let count = 0;
  while (count < array.length) {
    console.log(array[count]);
    count++;
  }
}

// whileLoop(arr);

function mapPractice(array) {
  const result = array.map(x => x + 2);
  return result;
}

// console.log(mapPractice(arr));

function filterPractice(array) {
  const result = array.filter(x => {
    return x % 2 === 0})
  
  return result;
}

// console.log(filterPractice(arr));

function reducePractice(array) {
  const sum = array.reduce((accumulator, current) => {
    return accumulator + current
  })

  return sum;
}

console.log(reducePractice(arr));
