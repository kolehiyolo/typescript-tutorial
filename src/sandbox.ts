type StringOrNum = string | number;
type objWithName = {
  name: string,
  uid: StringOrNum
};

const logDetails = (
  // uid: string | number,
  uid: StringOrNum,
  item: string
) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (
  // user: {
  //   name: string,
  //   uid: string | number
  // }
  user: objWithName
) => {
  console.log(`${user.name} says hello`);
};

const greet2 = (
  // user: {
  //   name: string,
  //   uid: string | number
  // }
  user: objWithName
) => {
  console.log(`${user.name} says hello`);
};

