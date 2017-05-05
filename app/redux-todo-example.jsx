"use strict";

console.log('Starting redux todo example.');

let defaultState =  {
  searchText : "",
  showCompleted : false,
  todos : []
};


const redux = require('redux');

let reducer = (state, action) => {
  state = state || defaultState;

  return state;
}

let store = redux.createStore(reducer);

let currenState = store.getState();
console.log("Şu anki durum : ", currenState);
