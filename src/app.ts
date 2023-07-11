// * Generics
const addUID = <T extends {name: string}>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let prevObj = {
  name: 'Yoshi',
  age: 40
};

let docOne = addUID(prevObj);

console.log(docOne);
console.log(docOne.name);

// let docTwo = addUID('hello');
// console.log(docTwo);

// * Generics with Interfaces
// interface Resource {
//   uid: number;
//   resourceName: string;
//   data: object;
// }

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc3: Resource<object> = {
  uid: 1,
  resourceName: 'Person',
  data: {}
};

console.log(doc3);

const doc4: Resource<string[]> = {
  uid: 2,
  resourceName: 'Shopping List',
  data: ['bread', 'milk']
}

console.log(doc4);