let getActivePlayer = (state) => {
  return state.players[0].isActive ? 0 : 1;
}

let changeActivePlayer = (players) => {
  return players.map((player)=> {
    player.isActive = !player.isActive;
    return player;
  });
}

var updateState = (state, action) => {
  let players = state.players.slice(0);
  let dice = state.dice;
  let activePlayer = players[getActivePlayer(state)];
  let isGameOver = state.isGameOver;

  switch (action.type) {
    case "ROLL_DICE" :
      break;
    case "UPDATE_SCORES":
      if (dice.dice == 1){
        alert("Maalesef 1 geldi!");
        activePlayer.currentScore = 0;
        players = changeActivePlayer(players);
        dice.previousDice = undefined;
      } else {
        if (dice.dice==6 && dice.previousDice==6){
          alert("Maalesef ark arkaya iki 6 attınız!");
          activePlayer.currentScore = 0;
          activePlayer.totalScore = 0;
          players = changeActivePlayer(players);
          dice.previousDice = undefined;
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
        isGameOver = true;
        alert("Kazanan : " + activePlayer.name + " !");
      } else {
        players = changeActivePlayer(players);
        dice.previousDice = undefined;
      }
      break;
    case "NEW_GAME" :
      players[0].totalScore = 0;
      players[1].totalScore = 0,
      players[0].currentScore = 0;
      players[1].currentScore = 0;
      players[0].isWinner = false;
      players[1].isWinner = false;
      players[0].isActive = true;
      players[1].isActive = false;
      isGameOver = false;
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
      case "NEW_GAME" :
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
      return updateState(state, action);
    case 'UPDATE_SCORES':
        return updateState(state, action);
    case 'HOLD_SCORE':
        return updateState(state, action);
    case 'NEW_GAME':
        return updateState(state, action);
    default:
      return state;
  }
};

module.exports = {
  reducer : reducer
}
