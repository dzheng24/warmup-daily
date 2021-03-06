// 3/12/20 Thursday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let count = 0;
  while (count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}

function plusOne(arr) {
  let result = arr.map(x => x + 1);
  console.log(result);
}

function onlyEvens(arr) {
  let result = arr.filter(x => {
    return x % 2 === 0
  })
  console.log(result);
}

function sum(arr) {
  let result = arr.reduce((sum, currentValue) => sum + currentValue);
  console.log(result);
}

//========================

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

newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Rover']}}
console.log(newState);

// Prove that the original people, stuff, and state are unchanged.

console.log(people);
console.log(stuff);
console.log(state);