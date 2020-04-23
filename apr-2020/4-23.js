// 4/23/20 Thursday 

// I'm going to switch it up a little bit for today's warmup: practicing nested for loops from yesterday. 

const table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// displaying the contents of table without brackets 

function displayContents(arr) {
  for (let i = 0; i < arr.length; i++) {
    let line = '';
    for (let j = 0; j < arr[i].length; j++) {
      let value = arr[i][j];
      line += value;
    }
    console.log(line);
  }
}

// find the sum of each row 
function rowSum(arr) {
  let answer = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let value = arr[i][j];
      answer[i] += value;
    }
  }
  console.log(answer);
}

// find the sum of each column
function columnSum(arr) {
  let answer = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let value = arr[j][i];
      answer[i] += value;
    }
  }
  console.log(answer);
}
