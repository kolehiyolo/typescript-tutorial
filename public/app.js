// interfaces
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
let docOne = new Invoice('yoshi', 'web work', 250);
let docTwo = new Payment('mario', 'plumbing work', 200);
// const invOne = new Invoice('mario','work on the mario website', 250);
// const invTwo = new Invoice('luigi','work on the luigi website', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
let invoices = [];
// invoices.push(invOne);
// invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// inputs
const form = document.querySelector('form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
