// let greet: Function;

// * Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

const wow = greet('elias', 'yo');

// * Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  };
};

calc(11, 2, 'add');

// * Example 3
type person = {
  name: string,
  age: number
};

let logDetails: (
  obj: person
) => void;

logDetails = (
  ninja: person
) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};