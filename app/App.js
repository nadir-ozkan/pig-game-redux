import React, { Component } from 'react';
import {render} from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main.jsx';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// Load css
require('style!css!sass!./styles/app.scss');

class App extends Component {

  render(){
    return (
      <Router history = {hashHistory}>
        <Route path="/" component={Main}>
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

require('./redux-example.jsx');
// require('./redux-todo-example.jsx');
