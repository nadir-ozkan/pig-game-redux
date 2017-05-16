const redux = require('redux');
import { reducer } from '../reducers/reducer.js';

var initialState = {
  players : [
    {
      name : "Nadir",
      currentScore : 0,
      totalScore : 0,
      isActive : true,
      isWinner : false
    },
    {
      name : "Çınar",
      currentScore : 0,
      totalScore : 0,
      isActive : false,
      isWinner : false
    }
  ],
  dice : {
    dice : 4,
    previousDice : undefined,
    isDiceVisible : false
  },
  isGameOver : false
}

var store = redux.createStore(reducer, initialState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

module.exports = {
  getStore : () => {
    return store;
  }
}
