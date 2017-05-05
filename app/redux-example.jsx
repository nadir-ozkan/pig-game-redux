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

let reducer = (state, action) => {
  state = state || {name : "Anomim"};

  switch (action.type) {
    case "CHANGE_NAME":
        return {
          ...state,
          name : action.name
        }
      break;
    default:
      return state;
  }
}

let store = redux.createStore(reducer);

let currenState = store.getState();
console.log("currenState", currenState);

let action = {
  type : "CHANGE_NAME",
  name : "Nadir"
}

store.dispatch(action);
