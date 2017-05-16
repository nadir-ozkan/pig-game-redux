import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import PigGameApp from './components/PigGameApp.jsx';
import {getStore} from './stores/store.js';
import actions from './actions/actions.js';


var store = getStore();

store.subscribe(()=> {
  console.log(store.getState().dice);
})

class App extends Component {

  render(){
    return (
      <PigGameApp></PigGameApp>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
