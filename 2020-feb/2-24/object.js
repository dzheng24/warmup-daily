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
newPeople = ['Odie', ... people, 'Garfield'];

// Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it
newStuff = {...stuff};
newStuff.cars = [...newStuff.cars, 'Ford'];

// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
state = {people, stuff};

// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
newState = {people, stuff};
newState.people = ['Odie', ...people, 'Garfield'];
newState.stuff = {...stuff};
newState.stuff.cars = [...stuff.cars, 'Ford'];

// Prove that the original people, stuff, and state are unchanged.
console.log(people);
console.log(stuff);
console.log(state);