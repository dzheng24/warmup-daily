

// array warmup
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




// -----------------------------------------------
// objects destructuring and spread syntax warmup

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


// Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it


// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment


// Using spread and destructuring assignments, create a new object called newState, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)


// Prove that the original people, stuff, and state are unchanged.

// console.log(people);
// console.log(stuff);
// console.log(state);

//-----------------------------------

// recursion warmup
// Write a function that finds the factorial of any number

function findFactorialRecursive(number) {

}

// console.log(findFactorialRecursive(5));

// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// The pattern of the sequence is that each value is the sum of the 2 previous values
// Ex. N = 5 -> 2 + 3

function fibonacciRecursive(n) {

}

// console.log(fibonacciRecursive(8));

// insertion sort 

const practice = [-88, 4, 6, 23, 24, 78, 99, 100, 20, 25];

function insertionSort(arr) {
  
}

insertionSort(practice);
console.log(practice);