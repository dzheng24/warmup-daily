// 4/12/20 Sunday 

// elementary sorts warmup

const numbers = [-44, 0, 55, 26, 27, 13, 19, 2, 24, 9000];

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
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    arr[i] = arr[minimum];
    arr[minimum] = temp;
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

// insertionSort(numbers);
// console.log(numbers);