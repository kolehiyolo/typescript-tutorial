"use strict";
// * Generics
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let prevObj = {
    name: 'Yoshi',
    age: 40
};
let docOne = addUID(prevObj);
console.log(docOne);
console.log(docOne.name);
const doc3 = {
    uid: 1,
    resourceName: 'Person',
    data: {}
};
console.log(doc3);
const doc4 = {
    uid: 2,
    resourceName: 'Shopping List',
    data: ['bread', 'milk']
};
console.log(doc4);
