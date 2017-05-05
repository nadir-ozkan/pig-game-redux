let redux = require('redux');

console.log('Starting redux example.');

let firstState = {
  name : "Nadir",
  age : 38
}

let changeProp = (obj) => {
  let newObj = Object.assign({}, obj);
  newObj.name = "Mahmut";
  return newObj;
}

console.log(firstState);
console.log(changeProp(firstState));
