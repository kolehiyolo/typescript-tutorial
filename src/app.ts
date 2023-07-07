// const anchor = document.querySelector('a')!;

// if (anchor) {
//   console.log(anchor.href);
// };

// console.log(anchor.href);

// const form = document.querySelector('form')!;

const form2 = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('.new-item-form .field #type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form2.addEventListener('submit', 
  (e: Event) => {
    e.preventDefault();

    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
  }
);