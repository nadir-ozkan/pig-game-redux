import React from 'react';

class Dice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {dice} = this.props;
    let diceSrc = "images/dice-" + dice.dice +".png";
    if (!dice.isDiceVisible) return null;
    return(
      <img src= {diceSrc} alt="Dice" className="dice"/>
    );
  }
}

export default Dice;
