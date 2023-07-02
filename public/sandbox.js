"use strict";
let greet = () => {
    console.log('hello, world');
};
// ! greet = 'word';
greet = () => {
    console.log('okay');
};
let greet2;
greet2 = () => {
    console.log('hello again dude');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
