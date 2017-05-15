import React from 'react';

import PlayerPanel from './PlayerPanel.jsx';
import Dice from './Dice.jsx';

class PigGameApp extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dice : "4",
        previousDice : undefined,
      }
    }
    render() {
        return (

          <div className="wrapper clearfix">

              <PlayerPanel></PlayerPanel>
              <PlayerPanel></PlayerPanel>

              <button className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
              <button className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
              <button className="btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>

              <Dice dice={this.state.dice}></Dice>

          </div>
        );
    }
}

export default PigGameApp;
