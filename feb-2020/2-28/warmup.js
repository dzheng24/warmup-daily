// 2/28/20 Friday 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function whileLoop(array) {
  let counter = 0;
  while(counter < array.length) {
    console.log(array[counter]);
    counter++;
  }
}

function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray;
}

const plusTwo = map(numbers, (number => (number + 2)));

function filter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const oddNumbers = filter(numbers, (number => number % 2 !== 0));

function reduce(arr, callback, result) {
  for(let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i);
  }
  return result;
}

const sum = reduce(numbers, (acc, cur) => {
  acc += cur;
  return acc
}, 0)

//---------------------------------

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

newPeople = ['Odie',...people, 'Garfield']

// Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it

newStuff = {...stuff, cars: [...stuff.cars, 'Ford']}

// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment

state = {people, stuff}

// Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)

newState = {...state, people: ['Odie', ...state.people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Ford']}}
console.log(newState);

// Prove that the original people, stuff, and state are unchanged.

console.log(people);
console.log(stuff);
console.log(state);
