"use strict";
// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // };
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
    ;
}
;
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne);
// console.log(invTwo);
// console.log(invOne.format());
// console.log(invTwo.format());
let invoices = [];
// ! invoices.push({name: 'shaun'});
// ! invoices.push('wow');
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    // ! inv.client = "wow";
    console.log(inv.client, 
    // inv.details,
    inv.amount, inv.format());
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
