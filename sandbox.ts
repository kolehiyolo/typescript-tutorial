// * Arrays
// -* Once an array is set, its typing has been set based on the values including when initialized
// This example is an array of type string
let names = ['luigi', 'mario', 'yoshi'];

// You can add more strings and edit existing items to strings
names.push('toad');
names[1] = 'wow';

// But you can't add non-strings or edit existing items into non-strings
// ! names = 3;
// ! names.push(3);
// ! names[0] = 3;

// -* This follows the previous rule
// This is an array of type numbers
// Numbers include integers and floats and anything else as long as it evaluates to a numerical value
let numbers = [10, 20, 30, 50];

// Any numbers can be added
numbers.push(25);
numbers.push(Math.PI);
numbers.push(Math.sqrt(69));
numbers.push(14251*1451);
numbers.push(0.0000000000005);

// Non-numbers can't be added into the array
// ! numbers.push('shaun');
// ! numbers[1] = ('shaun');

// -* This also follows rule #1, but more so in that when the items in the array when initialized are of a mixed type, those types included are then included as valid types for the array
// This is an array that accepts strings and numbers
let mixed = ['ken', 4, 'chun-li', 8, 9];

// You can add strings
mixed.push('ryu');
// You can add numbers
mixed.push(10);
// And you can even replace strings with numbers
mixed[0] = 45;

// But you can't add booleans
// ! mixed.push(false);



// * Objects
// -* When an object is initialized, the properties of the object take the values implied, and no other properties can be added/removed from the object
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

// We can replace the age with a number
ninja.age = 40;
// We can replace the name with a string
ninja.name = 'ryu';

// But we can't replace the age to a string
// ! ninja.age = '30';

// We can't add a new property 'skills'
// ! ninja.skills = ['fighting', 'sneaking'];

// And we can't replace the object entirely with another type
// ! ninja = '';

// -* Here we can replace the object by calling another object, as long as the values follow the set typing of the initialized
ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40
}

// -* Following rule #1, we can't replace the object with another object that doesn't have the same properties
// This one is lacking
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
// }

// This one has excess
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   skills: ['fighting', 'sneaking']
// }