// * Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

// ! age = 'luigi';
age = 30;

// ! isLoggedIn = 25;
isLoggedIn = true;

// * Arrays
// let ninjas: string[];
let ninjas: string[] = [];

// ! ninjas = [10, 23];
// ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// * Union Types
// let mixed: (string | number)[] = [];
let mixed: (string | number | boolean)[] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(20);
mixed.push(true);
// ! mixed.push(true);

let uid: string | number;
uid = '123';
uid = 123;
// ! uid = true;

// * Objects
let ninjaOne: object;
ninjaOne = {
  name: 'yoshi',
  age: 30
};
// ! ninjaOne = 'sample';
ninjaOne = ['wow'];

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColor: 'black'
};

