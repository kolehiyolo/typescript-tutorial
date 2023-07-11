// interfaces
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docs = [];
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
function processSubmit(e) {
    e.preventDefault();
    const fetchedData = fetchData();
    const newDocument = createDocument(fetchedData);
    docs.push(newDocument);
    logDocuments();
    addToList(newDocument, fetchedData.type);
}
;
function fetchData() {
    return {
        type: document.querySelector('#type').value,
        toFrom: document.querySelector('#toFrom').value,
        details: document.querySelector('#details').value,
        amount: document.querySelector('#amount').valueAsNumber
    };
}
;
function createDocument(fetchedData) {
    switch (fetchedData.type) {
        case ('invoice'):
            const newInvoice = new Invoice(fetchedData.toFrom, fetchedData.details, fetchedData.amount);
            return newInvoice;
        default:
            const newPayment = new Payment(fetchedData.toFrom, fetchedData.details, fetchedData.amount);
            return newPayment;
    }
}
;
function addToList(doc, fetchedDataType) {
    list.render(doc, fetchedDataType, 'end');
}
function logDocuments() {
    console.clear();
    docs.forEach((doc) => {
        console.log(doc.format());
    });
}
;
// * Fetching Form and assigning Submit Event Listener
// -* Call processSubmit() once triggered
document.querySelector('form')
    .addEventListener('submit', processSubmit);
