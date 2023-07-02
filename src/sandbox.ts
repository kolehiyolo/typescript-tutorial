let greet = () => {
  console.log('hello, world');
};

// ! greet = 'word';

greet = () => {
  console.log('okay');
};

let greet2: Function;

greet2 = () => {
  console.log('hello again dude');
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a+b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a-b;
};

let result = minus(10, 7);

console.log(result);