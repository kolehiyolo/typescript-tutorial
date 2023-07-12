// * Enums
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
};

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: {title: 'name of the wind'}
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: {name: 'yoshi'}
};

console.log(docOne);
console.log(docTwo);