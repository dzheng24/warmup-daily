// 4/11/20 Saturday 

// For my warmup today, I'm going to switch it up a little bit. 
// I'm going to write out the three elementary sort algorithms: bubble, selection, and insertion. 

const numbers = [88, 34, 23, 45, 2, 8, 299, 1000, -80];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // switch
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    arr[i] = arr[minimum];
    arr[minimum] = current;
  }
  console.log(arr);
}

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
  console.log(arr);
}
insertionSort(numbers);