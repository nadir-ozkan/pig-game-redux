let getActivePlayer = (state) => {
  return state.players[0].isActive ? 0 : 1;
}

let changeActivePlayer = (players) => {
  return players.map((player)=> {
    player.isActive = !player.isActive;
    return player;
  });
}

var updateScores = (state, action) => {
  let players = state.players.slice(0);
  let dice = state.dice;
  let activePlayer = players[getActivePlayer(state)];
  let isGameOver = state.isGameOver;

  switch (action.type) {

    case "UPDATE_SCORES":
      if (dice.dice == 1){
        alert("Maalesef 1 geldi!");
        activePlayer.currentScore = 0;
        players = changeActivePlayer(players);
      } else {
        if (dice.dice==6 && dice.previousDice==6){
          alert("Maalesef ark arkaya iki 6 attınız!");
          activePlayer.currentScore = 0;
          activePlayer.totalScore = 0;
          players = changeActivePlayer(players);
        } else {
          activePlayer.currentScore += dice.dice;
        }
      }
      break;
    case "HOLD_SCORE" :
      activePlayer.totalScore += activePlayer.currentScore;
      activePlayer.currentScore = 0;
      if (activePlayer.totalScore >= 20){
        activePlayer.isWinner = true;
        state.isGameOver = true;
      } else {
        players = changeActivePlayer(players);
      }

      break;
    default:
      return state;
  }

  return {
    players : players,
    dice : updateDice(state, action),
    isGameOver : isGameOver
  };
}

var updateDice = (state, action) => {
  var dice = Object.assign({}, state.dice);

  switch (action.type) {
    case "ROLL_DICE":
        dice.dice = action.dice;
        dice.isDiceVisible = action.dice == 1 ? false : true;
      break;
    case "UPDATE_SCORES":
        if (dice.dice == 1){
          dice.previousDice = dice.dice;
          dice.previousDice = undefined;
        } else {
          if (dice.dice ==6 && dice.previousDice==6){
            dice.previousDice = undefined;
            dice.isDiceVisible = false;
          } else {
            dice.previousDice = dice.dice;
          }
        };
        break;
      case "HOLD_SCORE" :
        dice.isDiceVisible = false;
        break;
    default:
      return dice;
  }

  return dice;
}

var reducer = (state, action) => {
  switch (action.type){
    case 'ROLL_DICE':
        return {
          ...state,
          dice : updateDice(state, action)
        }
    case 'UPDATE_SCORES':
        return updateScores(state, action);
    case 'HOLD_SCORE':
        return {
          ...state,
          players : updateScores(state, action),
          dice : updateDice(state, action)
        }
    default:
      return state;
  }
};

module.exports = {
  reducer : reducer
}
