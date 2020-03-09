// 3/9/20 Monday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0 ; i < arr.length; i ++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let count = 0;
  while (count < arr.length) {
    console.log(arr[count]);
    count++
  }
}

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
const squared = map(numbers, (number => number * number));

function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const oddsOnly = filter(numbers, (number => number % 2 !== 0));

function reduce(arr, callback, result) {
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}
const average = reduce(numbers, (total, currentValue, currentIndex, arr) => {
  total += currentValue;
  if (currentIndex === arr.length - 1) {
    return total / arr.length
  }
  return total;
}, 0)

//----------------------------

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
let newStuff = {};
let newState = {};

// Using spread and destructuring assignment, create a new array called newPeople, which is a copy of the people array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.

newPeople = ['Odie', ...people, 'Garfield'];

// Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it

newStuff = {...stuff, cars: [...stuff.cars, 'Rover']};

// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment

state = {people, stuff};

// Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)

newState = {...state, people: ['Odie', ...people, 'Garffield'], stuff: {...stuff, cars: [...stuff.cars, 'Rover']}};
console.log(newState);


// Prove that the original people, stuff, and state are unchanged.
console.log(people);
console.log(stuff);
console.log(state);