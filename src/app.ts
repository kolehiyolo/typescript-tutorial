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

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  };
};

const invOne = new Invoice('mario','work on the mario website', 250);
const invTwo = new Invoice('luigi','work on the luigi website', 300);

// console.log(invOne);
// console.log(invTwo);

// console.log(invOne.format());
// console.log(invTwo.format());

let invoices: Invoice[] = [];
// ! invoices.push({name: 'shaun'});
// ! invoices.push('wow');
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(
  (inv) => {
    // ! inv.client = "wow";
    console.log(
      inv.client,
      // inv.details,
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