// interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
};

const me: isPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

let someone: isPerson;

const greetPerson = (person: isPerson) => {
  console.log(`Hello ${person.name}`);
};

greetPerson(me);

import {Invoice} from './classes/Invoice.js';

const invOne = new Invoice('mario','work on the mario website', 250);
const invTwo = new Invoice('luigi','work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

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