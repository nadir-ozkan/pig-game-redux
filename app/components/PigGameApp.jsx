import React from 'react';
import { connect } from 'react-redux';

import PlayerPanel from './PlayerPanel.jsx';
import Dice from './Dice.jsx';
import Actions from '../actions/actions.js';
import {getStore} from '../stores/store.js';

var store = getStore();

class PigGameApp extends React.Component {
    constructor(props){
      super(props);
      this.isGameOver = props.isGameOver;
    }

    rollIt() { return Math.floor(Math.random() * 6) + 1; }

    handleRollDiceClick() {
      if (this.isGameOver) return;
      let dice = this.rollIt();
      store.dispatch(Actions.rollDice(dice));
      store.dispatch(Actions.updateScores());
    }

    handleHoldClick() {
      if (this.isGameOver) return;
      store.dispatch(Actions.holdScore());
    }

    handleNewGameClick() {
      if (this.isGameOver) return;
      store.dispatch(Actions.newGame());
    }

    render() {
        let {players, dice} = this.props;
        return (
          <div className="wrapper clearfix">
              <PlayerPanel player={players[0]}></PlayerPanel>
              <PlayerPanel player={players[1]}></PlayerPanel>
              <button className="btn-new" onClick={this.handleNewGameClick.bind(this)} ><i className="ion-ios-plus-outline"></i>New game</button>
              <button className="btn-roll" onClick={this.handleRollDiceClick.bind(this)}><i className="ion-ios-loop"></i>Roll dice</button>
              <button className="btn-hold" onClick={this.handleHoldClick.bind(this)}><i className="ion-ios-download-outline"></i>Hold</button>
              <Dice dice={dice}></Dice>
          </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.players
    players: state.players,
    dice : state.dice,
    isGameOver : state.isGameOver
  }
};

export default connect(mapStateToProps)(PigGameApp);
