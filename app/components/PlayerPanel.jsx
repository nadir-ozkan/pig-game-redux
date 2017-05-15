import React from 'react';
import PropTypes from 'prop-types';

class PlayerPanel extends React.Component {

  render(){
    let {player} = this.props;
    let divClass = player.isActive ? "player-panel active" : "player-panel";
    divClass = player.isWinner ? divClass + " winner" : divClass;
    return(
      <div className={divClass}>
          <div className="player-name" id="name-0">{player.name}</div>
          <div className="player-score" id="score-0">{player.currentScore}</div>
          <div className="player-current-box">
              <div className="player-current-label">Current</div>
              <div className="player-current-score">{player.totalScore}</div>
          </div>
      </div>
    );
  }
}

export default PlayerPanel;

PlayerPanel.propTypes = {
  player: PropTypes.object.isRequired,
}

PlayerPanel.defaultProps = {player: {
    name : "Default Player",
    currentScore : -1,
    totalScore : -1
  }
};
