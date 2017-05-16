const rollDice = (dice) => {
  return {
    type : "ROLL_DICE",
    dice : dice
  }
}

const updateScores = () => {
  return {
    type : "UPDATE_SCORES"
  }
}

const holdScore = () => {
  return {
    type : "HOLD_SCORE"
  }
}

const newGame = () => {
  return {
    type : "NEW_GAME"
  }
}


module.exports = {
  rollDice : rollDice,
  updateScores : updateScores,
  holdScore : holdScore,
  newGame : newGame
}
