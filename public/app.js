"use strict";
// const anchor = document.querySelector('a')!;
// if (anchor) {
//   console.log(anchor.href);
// };
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form2 = document.querySelector('.new-item-form');
const type = document.querySelector('.new-item-form .field #type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
