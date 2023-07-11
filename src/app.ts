// interfaces
import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';
import {Data} from './interfaces/Data.js';
import {ListTemplate} from './classes/ListTemplate.js';

let docs: HasFormatter[] = [];

// list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

function processSubmit(e: Event): void {
  e.preventDefault();

  const fetchedData: Data = fetchData();
  const newDocument: HasFormatter = createDocument(fetchedData);

  docs.push(newDocument);
  logDocuments();
  addToList(newDocument, fetchedData.type);
  
};

function fetchData(): Data {
  return {
    type: (document.querySelector('#type') as HTMLSelectElement).value,
    toFrom: (document.querySelector('#toFrom') as HTMLInputElement).value,
    details: (document.querySelector('#details') as HTMLInputElement).value,
    amount: (document.querySelector('#amount') as HTMLInputElement).valueAsNumber
  };
};

function createDocument(fetchedData: Data): HasFormatter {
  switch(fetchedData.type) {
    case ('invoice'):
      const newInvoice = new Invoice(
        fetchedData.toFrom,
        fetchedData.details,
        fetchedData.amount
      );
      return newInvoice;
    default:
      const newPayment = new Payment(
        fetchedData.toFrom,
        fetchedData.details,
        fetchedData.amount
      );
      return newPayment;
  }
};

function addToList(doc: HasFormatter, fetchedDataType: string): void {
  list.render(doc, fetchedDataType, 'end');
}

function logDocuments(): void {
  console.clear();
  docs.forEach(
    (doc) => {
      console.log(doc.format());
    }
  );
};

// * Fetching Form and assigning Submit Event Listener
// -* Call processSubmit() once triggered
(document.querySelector('form') as HTMLFormElement)
  .addEventListener('submit', processSubmit); 