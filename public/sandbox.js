"use strict";
// let greet: Function;
// * Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
const wow = greet('elias', 'yo');
// * Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
    ;
};
calc(11, 2, 'add');
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
