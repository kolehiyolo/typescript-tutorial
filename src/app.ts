// interfaces
import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

let docOne = new Invoice('yoshi', 'web work', 250);
let docTwo = new Payment('mario', 'plumbing work', 200);

// const invOne = new Invoice('mario','work on the mario website', 250);
// const invTwo = new Invoice('luigi','work on the luigi website', 300);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log(docs);

let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

invoices.forEach(
  (inv) => {
    console.log(
      inv.client,
      inv.amount,
      inv.format()
    );
  }
);

// inputs
const form = document.querySelector('form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',
  (e: Event) => {
    e.preventDefault();

    console.log(
      type.value,
      toFrom.value,
      details.value,
      amount.valueAsNumber,
    );
  }
); 