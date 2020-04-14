// 4/14/20 Tuesday 

// elementary sorts warmup

const numbers = [2, 3, 4, 1, 5, 6, 7, 23];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);
// console.log(numbers);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    arr[i] = arr[minimum];
    arr[minimum] = current;
  }
}

// selectionSort(numbers);
// console.log(numbers);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

insertionSort(numbers);
console.log(numbers);