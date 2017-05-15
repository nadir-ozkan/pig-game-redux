import React, { Component } from 'react';
import {render} from 'react-dom';
import PigGameApp from './components/PigGameApp.jsx';


class App extends Component {

  render(){
    return (
      <PigGameApp></PigGameApp>
    );
  }
}

render(<App />, document.getElementById('root'));
