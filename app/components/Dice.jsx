import React from 'react';

class Dice extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let diceSrc = "images/dice-" + this.props.dice +".png"
    return(
      <img src= {diceSrc} alt="Dice" className="dice"/>
    );
  }
}

export default Dice;
